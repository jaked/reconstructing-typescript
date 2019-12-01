import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import check from './check';
import Env from './env';
import { narrow, narrowType } from './narrow';

const underscore = AST.identifier('_');

const synthIdentifier = Trace.instrument('synthIdentifier',
function synthIdentifier(env: Env, ast: AST.Identifier): Type {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
}
);

const synthNull = Trace.instrument('synthNull',
function synthNull(env: Env, ast: AST.NullLiteral): Type {
  return Type.nullType;
}
);

const synthBoolean = Trace.instrument('synthBoolean',
function synthBoolean(env: Env, ast: AST.BooleanLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthNumber = Trace.instrument('synthNumber',
function synthNumber(env: Env, ast: AST.NumericLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthString = Trace.instrument('synthString',
function synthString(env: Env, ast: AST.StringLiteral): Type {
  return Type.singleton(ast.value);
}
);

const synthObject = Trace.instrument('synthObject',
function synthObject(env: Env, ast: AST.ObjectExpression): Type {
  const properties =
    ast.properties.map(prop => {
      if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
      if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
      if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
      if (prop.computed) bug(`unimplemented computed`);
      return {
        name: prop.key.name,
        type: synth(env, prop.value)
      };
    });
  return Type.object(properties);
}
);

const synthMember = Trace.instrument('synthMember',
function synthMember(env: Env, ast: AST.MemberExpression): Type {
  const prop = ast.property;
  if (!AST.isIdentifier(prop)) bug(`unimplemented ${prop.type}`);
  if (ast.computed) bug(`unimplemented computed`);
  const object = synth(env, ast.object);
  return Type.map(object, Trace.instrument('...synthMember', object => {
    if (!Type.isObject(object)) err('. expects object', ast.object);
    const type = Type.propType(object, prop.name);
    if (!type) err(`no such property ${prop.name}`, prop);
    return type;
  }, {...ast, object: underscore }));
}
);

const synthTSAs = Trace.instrument('synthTSAs',
function synthTSAs(env: Env, ast: AST.TSAsExpression): Type {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
}
);

const synthFunction = Trace.instrument('synthFunction',
function synthFunction(env: Env, ast: AST.ArrowFunctionExpression): Type {
  const body = ast.body;
  if (!AST.isExpression(body)) bug(`unimplemented ${body.type}`)
  const bindings = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation),
    };
  });
  const args = bindings.map(({ type }) => type);
  const argsLists = Type.distributeUnion(args);
  const funcTypes = argsLists.map(args => {
    const bodyEnv =
      bindings.reduce(
        (env, { name }, i) => env.set(name, args[i]),
        env
      );
    const ret = synth(bodyEnv, body);
    return Type.functionType(args, ret);
  })
  return Type.intersection(...funcTypes);
}
);

const synthCall = Trace.instrument('synthCall',
function synthCall(env: Env, ast: AST.CallExpression): Type {
  if (!AST.isExpression(ast.callee)) bug(`unimplemented ${ast.callee.type}`);
  const callee = synth(env, ast.callee);
  return Type.map(callee, Trace.instrument('...synthCall', callee => {
    if (!Type.isFunction(callee)) err(`call expects function`, ast.callee);
    if (callee.args.length !== ast.arguments.length)
      err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
      callee.args.forEach((type, i) => {
        const arg = ast.arguments[i];
        if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`)
        check(env, arg, type);
      });
    return callee.ret
  }, { ...ast, callee: underscore }));
}
);

const synthBinary = Trace.instrument('synthBinary',
function synthBinary(env: Env, ast: AST.BinaryExpression): Type {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`)
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return Type.map(left, right, Trace.instrument('...synthBinary', (left: Type, right: Type) => {
    switch (ast.operator) {
      case '===':
        if (Type.isSingleton(left) && Type.isSingleton(right))
          return Type.singleton(left.value === right.value);
        else
          return Type.boolean;

      case '!==':
        if (Type.isSingleton(left) && Type.isSingleton(right))
          return Type.singleton(left.value !== right.value);
        else
          return Type.boolean;

      case '+':
        if (Type.isSubtype(left, Type.number) && Type.isSubtype(right, Type.number)) {
          if (Type.isSingleton(left) && Type.isSingleton(right)) {
            if (typeof left.value !== 'number' || typeof right.value !== 'number')
              bug('unexpected value');
            return Type.singleton(left.value + right.value);
          } else {
            return Type.number;
          }
        } else {
          err('+ expects numbers', ast);
        }

      default: bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast, left: underscore, right: underscore }));
}
);

const synthLogical = Trace.instrument('synthLogical',
function synthLogical(env: Env, ast: AST.LogicalExpression): Type {
  const left = synth(env, ast.left);
  const right = synth(narrow(env, ast.left, ast.operator === '&&'), ast.right);
  return Type.map(left, right, Trace.instrument('...synthLogical', (left: Type, right: Type) => {
    switch (ast.operator) {
      case '&&':
        if (Type.isFalsy(left))
          return left;
        else if (Type.isTruthy(left))
          return right;
        else
          return Type.union(narrowType(left, Type.falsy), right);

      case '||':
        if (Type.isTruthy(left))
          return left;
        else if (Type.isFalsy(left))
          return right;
        else
          return Type.union(narrowType(left, Type.truthy), right);

      default: bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast, left: underscore, right: underscore }));
}
);

function typeofType(type: Type): string {
  switch (type.type) {
    case 'Singleton': return typeofType(type.base);
    case 'Boolean': return 'boolean';
    case 'Function': return 'function';
    case 'Null': return 'object';
    case 'Number': return 'number';
    case 'Object': return 'object';
    case 'String': return 'string';
    default: bug(`unexpected ${type.type}`);
  }
}

const typeofUnknownType =
  Type.union(...['boolean','number','string','object','function'].map(Type.singleton))

const synthUnary = Trace.instrument('synthUnary',
function synthUnary(env: Env, ast: AST.UnaryExpression): Type {
  const argument = synth(env, ast.argument);
  return Type.map(argument, Trace.instrument('...synthUnary', argument => {
    switch (ast.operator) {
      case '!':
        if (Type.isTruthy(argument))
          return Type.singleton(false);
        else if (Type.isFalsy(argument))
          return Type.singleton(true);
        else
          return Type.boolean;

      case 'typeof':
        if (Type.isNever(argument) || Type.isUnknown(argument))
          return typeofUnknownType;
        return Type.singleton(typeofType(argument));

      default: bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast, argument: underscore }));
}
);

const synthConditional = Trace.instrument('synthConditional',
function synthConditional(env: Env, ast: AST.ConditionalExpression): Type {
  const test = synth(env, ast.test);
  const consequent = synth(narrow(env, ast.test, true), ast.consequent);
  const alternate = synth(narrow(env, ast.test, false), ast.alternate);
  return Type.map(test, Trace.instrument('...synthConditional', test => {
    if (Type.isTruthy(test))
      return consequent;
    else if (Type.isFalsy(test))
      return alternate;
    else
      return Type.union(consequent, alternate);
  }, { ...ast, test: underscore, consequent: underscore, alternate: underscore }));
}
);

const synth = Trace.instrument('synth',
function synth(env: Env, ast: AST.Expression): Type {
  switch (ast.type) {
    case 'Identifier':              return synthIdentifier(env, ast);
    case 'NullLiteral':             return synthNull(env, ast);
    case 'BooleanLiteral':          return synthBoolean(env, ast);
    case 'NumericLiteral':          return synthNumber(env, ast);
    case 'StringLiteral':           return synthString(env, ast);
    case 'ObjectExpression':        return synthObject(env, ast);
    case 'MemberExpression':        return synthMember(env, ast);
    case 'TSAsExpression':          return synthTSAs(env, ast);
    case 'ArrowFunctionExpression': return synthFunction(env, ast);
    case 'CallExpression':          return synthCall(env, ast);
    case 'BinaryExpression':        return synthBinary(env, ast);
    case 'LogicalExpression':       return synthLogical(env, ast);
    case 'UnaryExpression':         return synthUnary(env, ast);
    case 'ConditionalExpression':   return synthConditional(env, ast);

    default: bug(`unimplemented ${ast.type}`);
  }
}
);

export default synth
