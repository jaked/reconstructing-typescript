import {
  BooleanLiteral,
  Expression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral
} from '@babel/types';
import * as Type from './type';

function synthNullLiteral(ast: NullLiteral) {
  return Type.null;
}

function synthBooleanLiteral(ast: BooleanLiteral) {
  return Type.boolean;
}

function synthNumericLiteral(ast: NumericLiteral) {
  return Type.number;
}

function synthStringLiteral(ast: StringLiteral) {
  return Type.string;
}

function synthObjectExpression(ast: ObjectExpression) {
  const fields =
    ast.properties.reduce<{ [n: string]: Type.Type }>((obj, prop) => {
      if (prop.type != 'ObjectProperty') throw `unimplemented ${prop.type}`;
      const key = prop.key as Expression;
      if (key.type != 'Identifier') throw `unimplemented ${key.type}`;
      const value = prop.value as Expression;
      return Object.assign(obj, { [key.name]: synth(value) })
    }, { });
  return Type.object(fields);
}

export default function synth(ast: Expression): Type.Type {
  switch (ast.type) {
    case 'BooleanLiteral':   return synthBooleanLiteral(ast);
    case 'NumericLiteral':   return synthNumericLiteral(ast);
    case 'StringLiteral':    return synthStringLiteral(ast);

    case 'ObjectExpression': return synthObjectExpression(ast);

    default: throw `unimplemented ${ast.type}`;
  }
}
