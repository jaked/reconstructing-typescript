import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Trace from '../util/trace';
import Type from '../type';
import Env from './env';
import synth from './synth';

const checkObject = Trace.instrument('checkObject',
function checkObject(env: Env, ast: AST.ObjectExpression, type: Type.Object) {
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
    if (propType) check(env, expr, propType);
    else err(`extra property ${name}`, key);
  });
}
);

const checkFunction = Trace.instrument('checkFunction',
function checkFunction(env: Env, ast: AST.ArrowFunctionExpression, type: Type.Function) {
  if (!AST.isExpression(ast.body)) bug(`unimplemented ${ast.body.type}`)
  if (type.args.length != ast.params.length)
    err(`expected ${type.args.length} args, got ${ast.params.length} args`, ast);
  const params = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    return param.name;
  });
  const bodyEnv =
    params.reduce(
      (env, param, i) => env.set(param, type.args[i]),
      env
    );
  check(bodyEnv, ast.body, type.ret);
}
);

const check = Trace.instrument('check',
function check(env: Env, ast: AST.Expression, type: Type) {
  if (AST.isObjectExpression(ast) && Type.isObject(type))
    return checkObject(env, ast, type);

  if (AST.isArrowFunctionExpression(ast) && Type.isFunction(type))
    return checkFunction(env, ast, type);

  const synthType = synth(env, ast);
  if (!Type.isSubtype(synthType, type))
    err(`expected ${Type.toString(type)}, got ${Type.toString(synthType)}`, ast);
}
);

export default check;
