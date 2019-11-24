import {
  BooleanLiteral,
  Expression,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral
} from '@babel/types';
import Type from '../type';

function synthNull(ast: NullLiteral): Type {
  return Type.nullType;
}

function synthBoolean(ast: BooleanLiteral): Type {
  return Type.boolean;
}

function synthNumber(ast: NumericLiteral): Type {
  return Type.number;
}

function synthString(ast: StringLiteral): Type {
  return Type.string;
}

function synthObject(ast: ObjectExpression): Type {
  const fields =
    ast.properties.reduce<{ [n: string]: Type.Type }>(
      (obj, prop) => {
        if (prop.type !== 'ObjectProperty') throw `unimplemented ${prop.type}`;
        const key = prop.key as Expression;
        if (key.type !== 'Identifier') throw `unimplemented ${key.type}`;
        const expr = prop.value as Expression;
        return Object.assign(obj, { [key.name]: synth(expr) })
      },
      { }
    );
  return Type.object(fields);
}

function synthMember(ast: MemberExpression): Type {
  const property = ast.property as Expression;
  if (property.type !== 'Identifier') throw `unimplemented ${property.type}`;
  const object = synth(ast.object);
  if (object.type !== 'Object') throw '. expects object';
  const type = object.properties[property.name];
  if (!type) throw `no such property ${property.name}`;
  return type;
}

export default function synth(ast: Expression): Type {
  switch (ast.type) {
    case 'NullLiteral':             return synthNull(ast);
    case 'BooleanLiteral':          return synthBoolean(ast);
    case 'NumericLiteral':          return synthNumber(ast);
    case 'StringLiteral':           return synthString(ast);
    case 'ObjectExpression':        return synthObject(ast);
    case 'MemberExpression':        return synthMember(ast);

    default: throw `unimplemented ${ast.type}`;
  }
}
