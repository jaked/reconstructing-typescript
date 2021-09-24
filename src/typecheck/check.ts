import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import synth from './synth';

const checkObject = Trace.instrument('checkObject',
function checkObject(ast: AST.ObjectExpression, type: Type.Object) {
  const astProps: { name: string, expr: AST.Expression, key: AST.Identifier }[] =
    ast.properties.map(prop => {
      if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
      if (prop.computed) bug(`unimplemented computed`);
      if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
      if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
      return {
        name: prop.key.name,
        expr: prop.value,
        key: prop.key
      };
    });

  type.properties.forEach(({ name }) => {
    const astProp = astProps.find(({ name: astName }) => astName === name);
    if (!astProp) err(`missing property ${name}`, ast);
  });

  astProps.forEach(({ name, expr, key }) => {
    const propType = Type.propType(type, name);
    if (propType) check(expr, propType);
    else err(`extra property ${name}`, key);
  });
}
);

const check = Trace.instrument('check',
function check(ast: AST.Expression, type: Type) {
  if (AST.isObjectExpression(ast) && Type.isObject(type))
    return checkObject(ast, type);

  const synthType = synth(ast);
  if (!Type.isSubtype(synthType, type))
    err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}
);

export default check;
