import {
  ArrowFunctionExpression,
  BinaryExpression,
  BooleanLiteral,
  CallExpression,
  ConditionalExpression,
  Expression,
  Identifier,
  LogicalExpression,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral,
  UnaryExpression
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
  return Type.singleton(ast.value);
}

function synthNumber(env: Env, ast: NumericLiteral): Type {
  return Type.singleton(ast.value);
}

function synthString(env: Env, ast: StringLiteral): Type {
  return Type.singleton(ast.value);
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
  return synthAndThen(env, ast.object, object => {
    if (object.type !== 'Object') throw '. expects object';
    const type = object.properties[property.name];
    if (!type) throw `no such property ${property.name}`;
    return type;
  });
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
  return synthAndThen(env, ast.callee as Expression, callee =>{
    if (callee.type !== 'Function') throw `call expects function`;
    if (callee.args.length !== ast.arguments.length)
      throw `expected ${callee.args.length} args, got ${ast.arguments.length} args`;
    callee.args.forEach((arg, i) => {
      check(env, ast.arguments[i] as Expression, arg)
    });
    return callee.ret;
  });
}

function synthBinary(env: Env, ast: BinaryExpression): Type {
  if (ast.operator !== '+') throw `unimplemented ${ast.operator}`;

  return synthAndThen(env, ast.left, left => {
    return synthAndThen(env, ast.right, right => {

      if (left.type === 'Singleton' && right.type === 'Singleton') {
        if (left.base.type === 'Number' && right.base.type === 'Number') {
          if (typeof left.value !== 'number' || typeof right.value !== 'number')
            throw 'unexpected value';
          return Type.singleton(left.value + right.value);
        } else {
          throw '+ expects numbers';
        }

      } else {
        if (left.type === 'Number' && right.type == 'Number')
          return Type.number;
        else
          throw '+ expects numbers';
      }
    });
  });
}

function isTruthyType(type: Type) {
  switch (type.type) {
    case 'Object': return true;
    case 'Function': return true;
    case 'Singleton': return type.value;
    default: return false;
  }
}

function isFalsyType(type: Type) {
  switch (type.type) {
    case 'Null': return true;
    case 'Singleton': return !type.value;
    default: return false;
  }
}

function synthLogical(env: Env, ast: LogicalExpression): Type {
  if (ast.operator !== '&&') throw `unimplemented ${ast.operator}`;

  return synthAndThen(env, ast.left, left => {
    return synthAndThen(env, ast.right, right => {

      if (isFalsyType(left))
        return left;
      else if (isTruthyType(left))
        return right;
      else
        return Type.union(left, right);
    });
  });
}

function synthUnary(env: Env, ast: UnaryExpression): Type {
  if (ast.operator !== '!') throw `unimplemented ${ast.operator}`;

  return synthAndThen(env, ast.argument, argument => {

    if (isTruthyType(argument))
      return Type.singleton(false);
    else if (isFalsyType(argument))
      return Type.singleton(true);
    else
      return Type.boolean;
  });
}

function synthConditional(env: Env, ast: ConditionalExpression): Type {
  return synthAndThen(env, ast.test, test => {
    const consequent = synth(env, ast.consequent);
    const alternate = synth(env, ast.alternate);

    if (isTruthyType(test))
      return consequent;
    else if (isFalsyType(test))
      return alternate;
    else
      return Type.union(consequent, alternate);
  });
}

function andThen(type: Type, fn: (t: Type) => Type): Type {
  switch (type.type) {
    case 'Union':
      return Type.union(...type.types.map(type => andThen(type, fn)));

    case 'Intersection': {
      let error: string | undefined = undefined;
      const intersection =
        Type.intersection(...type.types.map(type => {
          try { return fn(type); }
          catch (e) {
            if (!error) error = e;
            return Type.unknown;
          }
        }));
      if (intersection.type === 'Unknown') {
        if (!error) throw 'expected defined error';
        throw error;
      } else {
        return intersection;
      }
    }

    default:
      return fn(type);
  }
}

function synthAndThen(env: Env, ast: Expression, fn: (t: Type) => Type): Type {
  return andThen(synth(env, ast), fn);
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
    case 'BinaryExpression':        return synthBinary(env, ast);
    case 'LogicalExpression':       return synthLogical(env, ast);
    case 'UnaryExpression':         return synthUnary(env, ast);
    case 'ConditionalExpression':   return synthConditional(env, ast);

    default: throw `unimplemented ${ast.type}`;
  }
}
