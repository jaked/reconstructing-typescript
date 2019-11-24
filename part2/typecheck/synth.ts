import {
  ArrowFunctionExpression,
  BooleanLiteral,
  CallExpression,
  Expression,
  Identifier,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral
} from '@babel/types';
import Type from '../type';
import Env from './env';
import check from './check';

function synthIdentifier(env: Env, ast: Identifier): Type {
  const type = env(ast.name);
  if (!type) throw `unbound identifier '${ast.name}'`;
  return type;
}

function synthNull(env: Env, ast: NullLiteral): Type {
  return Type.nullType;
}

function synthBoolean(env: Env, ast: BooleanLiteral): Type {
  return Type.boolean;
}

function synthNumber(env: Env, ast: NumericLiteral): Type {
  return Type.number;
}

function synthString(env: Env, ast: StringLiteral): Type {
  return Type.string;
}

function synthObject(env: Env, ast: ObjectExpression): Type {
  const fields =
    ast.properties.reduce<{ [n: string]: Type.Type }>(
      (obj, prop) => {
        if (prop.type !== 'ObjectProperty') throw `unimplemented ${prop.type}`;
        const key = prop.key as Expression;
        if (key.type !== 'Identifier') throw `unimplemented ${key.type}`;
        const expr = prop.value as Expression;
        return Object.assign(obj, { [key.name]: synth(env, expr) })
      },
      { }
    );
  return Type.object(fields);
}

function synthMember(env: Env, ast: MemberExpression): Type {
  if (ast.computed) throw `unimplemented computed`;
  const property = ast.property as Expression;
  if (property.type !== 'Identifier') throw `unimplemented ${property.type}`;
  const object = synth(env, ast.object);
  if (object.type !== 'Object') throw '. expects object';
  const type = object.properties[property.name];
  if (!type) throw `no such property ${property.name}`;
  return type;
}

function synthFunction(env: Env, ast: ArrowFunctionExpression): Type {
  const argTypes = ast.params.map(param => {
    if (param.type !== 'Identifier') throw `unimplemented ${param.type}`;
    if (!param.typeAnnotation) throw `type required for '${param.name}'`;
    if (param.typeAnnotation.type !== 'TSTypeAnnotation') throw `unimplemented ${param.type}`
    const name = param.name;
    const type = Type.ofTSType(param.typeAnnotation.typeAnnotation);
    return { name, type };
  });
  const args = argTypes.map(({ name, type }) => type);
  const bodyEnv =
    argTypes.reduce(
      (env, { name, type }) => env.set(name, type),
      env
    );
  const ret = synth(bodyEnv, ast.body as Expression);
  return Type.functionType(args, ret);
}

function synthCall(env: Env, ast: CallExpression): Type {
  const callee = synth(env, ast.callee as Expression);
  if (callee.type !== 'Function') throw `call expects function`;
  if (callee.args.length !== ast.arguments.length)
    throw `expected ${callee.args.length} args, got ${ast.arguments.length} args`;
  callee.args.forEach((arg, i) => {
    check(env, ast.arguments[i] as Expression, arg)
  });
  return callee.ret;
}

export default function synth(env: Env, ast: Expression): Type {
  switch (ast.type) {
    case 'Identifier':              return synthIdentifier(env, ast);
    case 'NullLiteral':             return synthNull(env, ast);
    case 'BooleanLiteral':          return synthBoolean(env, ast);
    case 'NumericLiteral':          return synthNumber(env, ast);
    case 'StringLiteral':           return synthString(env, ast);
    case 'ObjectExpression':        return synthObject(env, ast);
    case 'MemberExpression':        return synthMember(env, ast);
    case 'ArrowFunctionExpression': return synthFunction(env, ast);
    case 'CallExpression':          return synthCall(env, ast);

    default: throw `unimplemented ${ast.type}`;
  }
}
