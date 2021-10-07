import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import check from './check';
import Env from './env';

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
  return andThen(object, Trace.instrument('andThenMember', object => {
    if (!Type.isObject(object)) err('. expects object', ast.object);
    const type = Type.propType(object, prop.name);
    if (!type) err(`no such property ${prop.name}`, prop);
    return type;
  }));
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
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`)
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
  const bodyEnv =
    bindings.reduce(
      (env, { name, type }) => env.set(name, type),
      env
    );
  const ret = synth(bodyEnv, ast.body);
  return Type.functionType(args, ret);
}
);

const synthCall = Trace.instrument('synthCall',
function synthCall(env: Env, ast: AST.CallExpression): Type {
  if (!AST.isExpression(ast.callee)) bug(`unimplemented ${ast.callee.type}`);
  const callee = synth(env, ast.callee);
  return andThen(callee, Trace.instrument('andThenCall', callee => {
    if (!Type.isFunction(callee)) err(`call expects function`, ast.callee);
    if (callee.args.length !== ast.arguments.length)
      err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
      callee.args.forEach((type, i) => {
        const arg = ast.arguments[i];
        if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`)
        check(env, arg, type);
      });
    return callee.ret
  }));
}
);

const synthBinary = Trace.instrument('synthBinary',
function synthBinary(env: Env, ast: AST.BinaryExpression): Type {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`)
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return andThen(left, right, Trace.instrument(`andThenBinary[${ast.operator}]`, (left: Type, right: Type) => {
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
  }));
}
);

const synthLogical = Trace.instrument('synthLogical',
function synthLogical(env: Env, ast: AST.LogicalExpression): Type {
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return andThen(left, right, Trace.instrument(`andThenLogical[${ast.operator}]`, (left: Type, right: Type) => {
    switch (ast.operator) {
      case '&&':
        if (Type.isFalsy(left))
          return left;
        else if (Type.isTruthy(left))
          return right;
        else
          return Type.union(left, right);

      case '||':
        if (Type.isTruthy(left))
          return left;
        else if (Type.isFalsy(left))
          return right;
        else
          return Type.union(left, right);

      default: bug(`unimplemented ${ast.operator}`);
    }
  }));
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

const synthUnary = Trace.instrument('synthUnary',
function synthUnary(env: Env, ast: AST.UnaryExpression): Type {
  const argument = synth(env, ast.argument);
  return andThen(argument, Trace.instrument('andThenUnary', argument => {
    switch (ast.operator) {
      case '!':
        if (Type.isTruthy(argument))
          return Type.singleton(false);
        else if (Type.isFalsy(argument))
          return Type.singleton(true);
        else
          return Type.boolean;

      case 'typeof':
        return Type.singleton(typeofType(argument));

      default: bug(`unimplemented ${ast.operator}`);
    }
  }));
}
);

function andThen2Union(t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type) {
  const t1s = Type.isUnion(t1) ? t1.types : [t1];
  const t2s = Type.isUnion(t2) ? t2.types : [t2];
  const ts: Type[] = [];
  for (const t1 of t1s) {
    for (const t2 of t2s) {
      ts.push(fn(t1, t2));
    }
  }
  return Type.union(...ts);
}

function andThen2(t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type): Type {
  if (Type.isUnion(t1) || Type.isUnion(t2)) {
    return Trace.instrument('andThen', andThen2Union)(t1, t2, fn);
  } else {
    return fn(t1, t2);
  }
}

function andThen1Union (t: Type.Union, fn: (t: Type) => Type) {
  return Type.union(...t.types.map(t => andThen(t, fn)));
}

function andThen1(t: Type, fn: (t: Type) => Type) {
  if (Type.isUnion(t)) {
    return Trace.instrument('andThen', andThen1Union)(t, fn);
  } else {
    return fn(t);
  }
}

const andThen:
  ((t: Type, fn: (t: Type) => Type) => Type) &
  ((t1: Type, t2: Type, fn: (t1: Type, t2: Type) => Type) => Type) =
  (...args: any[]) => {
    switch (args.length) {
      case 2:
        return andThen1(args[0], args[1]);
      case 3:
        return andThen2(args[0], args[1], args[2]);
      default:
        bug(`unexpected ${args.length}`);
    }
  }

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

    default: bug(`unimplemented ${ast.type}`);
  }
}
);

export default synth
