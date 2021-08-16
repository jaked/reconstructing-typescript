import {
  BooleanLiteral,
  Expression,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral
} from '@babel/types';
import { bug, err } from '../util/err';
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
        if (prop.type !== 'ObjectProperty') bug(`unimplemented ${prop.type}`);
        const key = prop.key as Expression;
        if (key.type !== 'Identifier') bug(`unimplemented ${key.type}`);
        const expr = prop.value as Expression;
        return Object.assign(obj, { [key.name]: synth(expr) })
      },
      { }
    );
  return Type.object(fields);
}

function synthMember(ast: MemberExpression): Type {
  if (ast.computed) bug(`unimplemented computed`);
  const property = ast.property as Expression;
  if (property.type !== 'Identifier') bug(`unimplemented ${property.type}`);
  const object = synth(ast.object);
  if (object.type !== 'Object') err('. expects object', ast.object);
  const type = object.properties[property.name];
  if (!type) err(`no such property ${property.name}`, property);
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

    default: bug(`unimplemented ${ast.type}`);
  }
}
