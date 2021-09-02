import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import Type from '../type';
import check from './check';

function synthNull(ast: AST.NullLiteral): Type {
  return Type.nullType;
}

function synthBoolean(ast: AST.BooleanLiteral): Type {
  return Type.boolean;
}

function synthNumber(ast: AST.NumericLiteral): Type {
  return Type.number;
}

function synthString(ast: AST.StringLiteral): Type {
  return Type.string;
}

function synthObject(ast: AST.ObjectExpression): Type {
  const properties =
    ast.properties.map(prop => {
      if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
      if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
      if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
      if (prop.computed) bug(`unimplemented computed`);
      return {
        name: prop.key.name,
        type: synth(prop.value)
      };
    });
  return Type.object(properties);
}

function synthMember(ast: AST.MemberExpression): Type {
  const prop = ast.property;
  if (!AST.isIdentifier(prop)) bug(`unimplemented ${prop.type}`);
  if (ast.computed) bug(`unimplemented computed`);
  const object = synth(ast.object);
  if (!Type.isObject(object)) err('. expects object', ast.object);
  const type = Type.propType(object, prop.name);
  if (!type) err(`no such property ${prop.name}`, prop);
  return type;
}

function synthTSAs(ast: AST.TSAsExpression): Type {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(ast.expression, type);
  return type;
}

export default function synth(ast: AST.Expression): Type {
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
