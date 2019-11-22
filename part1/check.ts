import {
  Expression,
  ObjectExpression
} from '@babel/types';
import Type from './type';
import Env from './env';
import synth from './synth';
import isSubtype from './isSubtype';

function checkObject(env: Env, ast: ObjectExpression, type: Type.Object) {
  const astProps: { [name: string]: Expression } =
    Object.assign({}, ...ast.properties.map(prop => {
      if (prop.type != 'ObjectProperty') throw `unimplemented ${prop.type}`;
      const key = prop.key as Expression;
      if (key.type != 'Identifier') throw `unimplemented ${key.type}`;
      const expr = prop.value as Expression;
      return { [key.name]: expr };
    }));

  Object.entries(type.properties).forEach(([ name, type ]) => {
    if (!astProps[name]) throw `missing property ${name}`;
  });

  Object.entries(astProps).forEach(([name, expr]) => {
    const propType = type.properties[name];
    if (propType) check(env, expr, propType);
    else throw `extra property ${name}`;
  });
}

export default function check(env: Env, ast: Expression, type: Type) {
  if (ast.type === 'ObjectExpression' && type.type === 'Object')
    return checkObject(env, ast, type);

  const synthType = synth(env, ast);
  if (!isSubtype(synthType, type))
    throw `expected ${Type.toString(type)}, got ${Type.toString(synthType)}`;
}
