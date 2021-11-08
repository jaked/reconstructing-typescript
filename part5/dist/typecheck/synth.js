import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import * as Trace from "../util/trace.js";
import Type from "../type/index.js";
import check from "./check.js";
const underscore = AST.identifier("_");
const synthIdentifier = Trace.instrument("synthIdentifier", function synthIdentifier2(env, ast) {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
});
const synthNull = Trace.instrument("synthNull", function synthNull2(env, ast) {
  return Type.nullType;
});
const synthBoolean = Trace.instrument("synthBoolean", function synthBoolean2(env, ast) {
  return Type.singleton(ast.value);
});
const synthNumber = Trace.instrument("synthNumber", function synthNumber2(env, ast) {
  return Type.singleton(ast.value);
});
const synthString = Trace.instrument("synthString", function synthString2(env, ast) {
  return Type.singleton(ast.value);
});
const synthObject = Trace.instrument("synthObject", function synthObject2(env, ast) {
  const properties = ast.properties.map(prop => {
    if (!AST.isObjectProperty(prop)) bug(`unimplemented ${prop.type}`);
    if (!AST.isIdentifier(prop.key)) bug(`unimplemented ${prop.key.type}`);
    if (!AST.isExpression(prop.value)) bug(`unimplemented ${prop.value.type}`);
    if (prop.computed) bug(`unimplemented computed`);
    return {
      name: prop.key.name,
      type: synth(env, prop.value)
    };
  });
  return Type.object(properties);
});
const synthMember = Trace.instrument("synthMember", function synthMember2(env, ast) {
  const prop = ast.property;
  if (!AST.isIdentifier(prop)) bug(`unimplemented ${prop.type}`);
  if (ast.computed) bug(`unimplemented computed`);
  const object = synth(env, ast.object);
  return Type.map(object, Trace.instrument("...synthMember", object2 => {
    if (!Type.isObject(object2)) err(". expects object", ast.object);
    const type = Type.propType(object2, prop.name);
    if (!type) err(`no such property ${prop.name}`, prop);
    return type;
  }, { ...ast,
    object: underscore
  }));
});
const synthTSAs = Trace.instrument("synthTSAs", function synthTSAs2(env, ast) {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
});
const synthFunction = Trace.instrument("synthFunction", function synthFunction2(env, ast) {
  const body = ast.body;
  if (!AST.isExpression(body)) bug(`unimplemented ${body.type}`);
  const bindings = ast.params.map(param => {
    if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation)
    };
  });
  const args = bindings.map(({
    type
  }) => type);
  const argsLists = Type.distributeUnion(args);
  const funcTypes = argsLists.map(args2 => {
    const bodyEnv = bindings.reduce((env2, {
      name
    }, i) => env2.set(name, args2[i]), env);
    const ret = synth(bodyEnv, body);
    return Type.functionType(args2, ret);
  });
  return Type.intersection(...funcTypes);
});
const synthCall = Trace.instrument("synthCall", function synthCall2(env, ast) {
  if (!AST.isExpression(ast.callee)) bug(`unimplemented ${ast.callee.type}`);
  const callee = synth(env, ast.callee);
  return Type.map(callee, Trace.instrument("...synthCall", callee2 => {
    if (!Type.isFunction(callee2)) err(`call expects function`, ast.callee);
    if (callee2.args.length !== ast.arguments.length) err(`expected ${callee2.args.length} args, got ${ast.arguments.length} args`, ast);
    callee2.args.forEach((type, i) => {
      const arg = ast.arguments[i];
      if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`);
      check(env, arg, type);
    });
    return callee2.ret;
  }, { ...ast,
    callee: underscore
  }));
});
const synthBinary = Trace.instrument("synthBinary", function synthBinary2(env, ast) {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return Type.map(left, right, Trace.instrument("...synthBinary", (left2, right2) => {
    switch (ast.operator) {
      case "===":
        if (Type.isSingleton(left2) && Type.isSingleton(right2)) return Type.singleton(left2.value === right2.value);else return Type.boolean;

      case "!==":
        if (Type.isSingleton(left2) && Type.isSingleton(right2)) return Type.singleton(left2.value !== right2.value);else return Type.boolean;

      case "+":
        if (Type.isSubtype(left2, Type.number) && Type.isSubtype(right2, Type.number)) {
          if (Type.isSingleton(left2) && Type.isSingleton(right2)) {
            if (typeof left2.value !== "number" || typeof right2.value !== "number") bug("unexpected value");
            return Type.singleton(left2.value + right2.value);
          } else {
            return Type.number;
          }
        } else {
          err("+ expects numbers", ast);
        }

      default:
        bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast,
    left: underscore,
    right: underscore
  }));
});
const synthLogical = Trace.instrument("synthLogical", function synthLogical2(env, ast) {
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return Type.map(left, right, Trace.instrument("...synthLogical", (left2, right2) => {
    switch (ast.operator) {
      case "&&":
        if (Type.isFalsy(left2)) return left2;else if (Type.isTruthy(left2)) return right2;else return Type.union(left2, right2);

      case "||":
        if (Type.isTruthy(left2)) return left2;else if (Type.isFalsy(left2)) return right2;else return Type.union(left2, right2);

      default:
        bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast,
    left: underscore,
    right: underscore
  }));
});

function typeofType(type) {
  switch (type.type) {
    case "Singleton":
      return typeofType(type.base);

    case "Boolean":
      return "boolean";

    case "Function":
      return "function";

    case "Null":
      return "object";

    case "Number":
      return "number";

    case "Object":
      return "object";

    case "String":
      return "string";

    default:
      bug(`unexpected ${type.type}`);
  }
}

const typeofUnknownType = Type.union(...["boolean", "number", "string", "object", "function"].map(Type.singleton));
const synthUnary = Trace.instrument("synthUnary", function synthUnary2(env, ast) {
  const argument = synth(env, ast.argument);
  return Type.map(argument, Trace.instrument("...synthUnary", argument2 => {
    switch (ast.operator) {
      case "!":
        if (Type.isTruthy(argument2)) return Type.singleton(false);else if (Type.isFalsy(argument2)) return Type.singleton(true);else return Type.boolean;

      case "typeof":
        if (Type.isNever(argument2) || Type.isUnknown(argument2)) return typeofUnknownType;
        return Type.singleton(typeofType(argument2));

      default:
        bug(`unimplemented ${ast.operator}`);
    }
  }, { ...ast,
    argument: underscore
  }));
});
const synth = Trace.instrument("synth", function synth2(env, ast) {
  switch (ast.type) {
    case "Identifier":
      return synthIdentifier(env, ast);

    case "NullLiteral":
      return synthNull(env, ast);

    case "BooleanLiteral":
      return synthBoolean(env, ast);

    case "NumericLiteral":
      return synthNumber(env, ast);

    case "StringLiteral":
      return synthString(env, ast);

    case "ObjectExpression":
      return synthObject(env, ast);

    case "MemberExpression":
      return synthMember(env, ast);

    case "TSAsExpression":
      return synthTSAs(env, ast);

    case "ArrowFunctionExpression":
      return synthFunction(env, ast);

    case "CallExpression":
      return synthCall(env, ast);

    case "BinaryExpression":
      return synthBinary(env, ast);

    case "LogicalExpression":
      return synthLogical(env, ast);

    case "UnaryExpression":
      return synthUnary(env, ast);

    default:
      bug(`unimplemented ${ast.type}`);
  }
});
export default synth;