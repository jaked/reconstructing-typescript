import {
  Expression,
  Identifier,
  ObjectExpression
} from '@babel/types';
import { assert, err, ensure } from '../util/err';
import Type from '../type';
import synth from './synth';

function checkObject(ast: ObjectExpression, type: Type.Object) {
  const astProps: { [name: string]: [Identifier, Expression] } =
    Object.assign({}, ...ast.properties.map(prop => {
      assert(prop.type === 'ObjectProperty', `unimplemented ${prop.type}`);
      const key = prop.key as Expression;
      assert(key.type === 'Identifier', `unimplemented ${key.type}`);
      const expr = prop.value as Expression;
      return { [key.name]: [key, expr] };
    }));

  Object.entries(type.properties).forEach(([ name, type ]) => {
    ensure(astProps[name], `missing property ${name}`, ast);
  });

  Object.entries(astProps).forEach(([name, [key, expr]]) => {
    const propType = type.properties[name];
    if (propType) check(expr, propType);
    else err(`extra property ${name}`, key);
  });
}

export default function check(ast: Expression, type: Type) {
  if (ast.type === 'ObjectExpression' && type.type === 'Object')
    return checkObject(ast, type);

  const synthType = synth(ast);
  if (!Type.isSubtype(synthType, type))
    err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}
