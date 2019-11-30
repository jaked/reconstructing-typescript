import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import check from './check';
import Env from './env';

const synthIdentifier = Trace.instrument('synthIdentifier',
function synthIdentifier(env: Env, ast: AST.Identifier): Type {
  const type = env(ast.name);
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
  return Type.boolean;
}
);

const synthNumber = Trace.instrument('synthNumber',
function (env: Env, ast: AST.NumericLiteral): Type {
  return Type.number;
}
);

const synthString = Trace.instrument('synthString',
function synthString(env: Env, ast: AST.StringLiteral): Type {
  return Type.string;
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
  if (!Type.isObject(object)) err('. expects object', ast.object);
  const type = Type.propType(object, prop.name);
  if (!type) err(`no such property ${prop.name}`, prop);
  return type;
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
  const argTypes = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation),
    };
  });
  const args = argTypes.map(({ type }) => type);
  const bodyEnv =
    argTypes.reduce(
      (env, { name, type }) => env.set(name, type),
      env
    );
  const ret = synth(bodyEnv, ast.body);
  return Type.functionType(args, ret);
}
);

const synthCall = Trace.instrument('synthCall',
function synthCall(env: Env, ast: AST.CallExpression): Type {
  if (!AST.isExpression(ast.callee)) bug(`expected ${ast.callee.type}`);
  const callee = synth(env, ast.callee);
  if (!Type.isFunction(callee)) err(`call expects function`, ast.callee);
  if (callee.args.length !== ast.arguments.length)
    err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
  callee.args.forEach((type, i) => {
    const arg = ast.arguments[i];
    if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`)
    check(env, arg, type);
  });
  return callee.ret;
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

    default: bug(`unimplemented ${ast.type}`);
  }
}
);

export default synth
