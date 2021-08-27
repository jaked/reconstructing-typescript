import {
  BooleanLiteral,
  Expression,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral,
  TSAsExpression,
} from '@babel/types';
import { bug, err } from '../util/err';
import Type from '../type';
import check from './check';

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
  const properties =
    ast.properties.map(prop => {
      if (prop.type !== 'ObjectProperty') bug(`unimplemented ${prop.type}`);
      if (prop.computed) bug(`unimplemented computed`);
      if (prop.key.type !== 'Identifier') bug(`unimplemented ${prop.key.type}`);
      return {
        name: prop.key.name,
        type: synth(prop.value as Expression)
      };
    });
  return Type.object(properties);
}

function synthMember(ast: MemberExpression): Type {
  if (ast.computed) bug(`unimplemented computed`);
  const prop = ast.property;
  if (prop.type !== 'Identifier') bug(`unimplemented ${prop.type}`);
  const object = synth(ast.object);
  if (object.type !== 'Object') err('. expects object', ast.object);
  const typeProp = object.properties.find(({ name: typeName }) => typeName === prop.name);
  if (!typeProp) err(`no such property ${prop.name}`, prop);
  return typeProp.type;
}

function synthTSAs(ast: TSAsExpression): Type {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(ast.expression, type);
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
    case 'TSAsExpression':          return synthTSAs(ast);

    default: bug(`unimplemented ${ast.type}`);
  }
}
