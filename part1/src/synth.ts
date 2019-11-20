import {
  ArrowFunctionExpression,
  BooleanLiteral,
  Expression,
  Identifier,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral
} from '@babel/types';
import Type from './type';
import Env from './env';

function synthIdentifier(env: Env, ast: Identifier): Type {
  const type = env.get(ast.name);
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

export default function synth(env: Env, ast: Expression): Type {
  switch (ast.type) {
    case 'Identifier':              return synthIdentifier(env, ast);
    case 'NullLiteral':             return synthNull(env, ast);
    case 'BooleanLiteral':          return synthBoolean(env, ast);
    case 'NumericLiteral':          return synthNumber(env, ast);
    case 'StringLiteral':           return synthString(env, ast);
    case 'ObjectExpression':        return synthObject(env, ast);
    case 'ArrowFunctionExpression': return synthFunction(env, ast);

    default: throw `unimplemented ${ast.type}`;
  }
}
