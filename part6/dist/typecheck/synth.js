import { bug, err } from "../util/err.js";
import Type from "../type/index.js";
import check from "./check.js";
import { narrow, narrowType } from "./narrow.js";

function synthIdentifier(env, ast) {
  const type = env.get(ast.name);
  if (!type) err(`unbound identifier '${ast.name}'`, ast);
  return type;
}

function synthNull(env, ast) {
  return Type.nullType;
}

function synthBoolean(env, ast) {
  return Type.singleton(ast.value);
}

function synthNumber(env, ast) {
  return Type.singleton(ast.value);
}

function synthString(env, ast) {
  return Type.singleton(ast.value);
}

function synthObject(env, ast) {
  const properties = ast.properties.map(prop => {
    if (prop.type !== "ObjectProperty") bug(`unimplemented ${prop.type}`);
    if (prop.computed) bug(`unimplemented computed`);
    if (prop.key.type !== "Identifier") bug(`unimplemented ${prop.key.type}`);
    return {
      name: prop.key.name,
      type: synth(env, prop.value)
    };
  });
  return Type.object(properties);
}

function synthMember(env, ast) {
  if (ast.computed) bug(`unimplemented computed`);
  const prop = ast.property;
  if (prop.type !== "Identifier") bug(`unimplemented ${prop.type}`);
  return synthAndThen(env, ast.object, object => {
    if (object.type !== "Object") err(". expects object", ast.object);
    const typeProp = object.properties.find(({
      name: typeName
    }) => typeName === prop.name);
    if (!typeProp) err(`no such property ${prop.name}`, prop);
    return typeProp.type;
  });
}

function synthTSAs(env, ast) {
  const type = Type.ofTSType(ast.typeAnnotation);
  check(env, ast.expression, type);
  return type;
}

function synthFunction(env, ast) {
  const params = ast.params.map(param => {
    if (param.type !== "Identifier") bug(`unimplemented ${param.type}`);
    if (!param.typeAnnotation) err(`type required for '${param.name}'`, param);
    if (param.typeAnnotation.type !== "TSTypeAnnotation") bug(`unimplemented ${param.type}`);
    return {
      name: param.name,
      type: Type.ofTSType(param.typeAnnotation.typeAnnotation)
    };
  });
  const paramTypes = params.map(({
    type
  }) => type);
  const paramTypesLists = Type.distributeUnion(paramTypes);
  const funcTypes = paramTypesLists.map(types => {
    const bodyEnv = params.reduce((env2, {
      name
    }, i) => env2.set(name, types[i]), env);
    const ret = synth(bodyEnv, ast.body);
    return Type.functionType(types, ret);
  });
  return Type.intersection(...funcTypes);
}

function synthCall(env, ast) {
  return synthAndThen(env, ast.callee, callee => {
    if (callee.type !== "Function") err(`call expects function`, ast.callee);
    if (callee.args.length !== ast.arguments.length) err(`expected ${callee.args.length} args, got ${ast.arguments.length} args`, ast);
    callee.args.forEach((arg, i) => {
      check(env, ast.arguments[i], arg);
    });
    return callee.ret;
  });
}

function synthBinary(env, ast) {
  switch (ast.operator) {
    case "+":
      return synthAndThen(env, ast.left, left => {
        return synthAndThen(env, ast.right, right => {
          if (left.type === "Singleton" && right.type === "Singleton") {
            if (left.base.type === "Number" && right.base.type === "Number") {
              if (typeof left.value !== "number" || typeof right.value !== "number") bug("unexpected value");
              return Type.singleton(left.value + right.value);
            } else {
              err("+ expects numbers", ast);
            }
          } else {
            if (Type.isSubtype(left, Type.number) && Type.isSubtype(right, Type.number)) return Type.number;else err("+ expects numbers", ast);
          }
        });
      });

    case "===":
      return synthAndThen(env, ast.left, left => {
        return synthAndThen(env, ast.right, right => {
          if (left.type === "Singleton" && right.type === "Singleton") return Type.singleton(left.value === right.value);else return Type.boolean;
        });
      });

    case "!==":
      return synthAndThen(env, ast.left, left => {
        return synthAndThen(env, ast.right, right => {
          if (left.type === "Singleton" && right.type === "Singleton") return Type.singleton(left.value !== right.value);else return Type.boolean;
        });
      });

    default:
      bug(`unimplemented ${ast.operator}`);
  }
}

function synthLogical(env, ast) {
  switch (ast.operator) {
    case "&&":
      {
        const rightEnv = narrow(env, ast.left, true);
        return synthAndThen(env, ast.left, left => {
          return synthAndThen(rightEnv, ast.right, right => {
            if (Type.isFalsy(left)) return left;else if (Type.isTruthy(left)) return right;else return Type.union(narrowType(left, Type.falsy), right);
          });
        });
      }

    case "||":
      {
        const rightEnv = narrow(env, ast.left, false);
        return synthAndThen(env, ast.left, left => {
          return synthAndThen(rightEnv, ast.right, right => {
            if (Type.isTruthy(left)) return left;else if (Type.isFalsy(left)) return right;else return Type.union(narrowType(left, Type.truthy), right);
          });
        });
      }

    default:
      bug(`unimplemented ${ast.operator}`);
  }
}

function synthUnary(env, ast) {
  switch (ast.operator) {
    case "!":
      return synthAndThen(env, ast.argument, argument => {
        if (Type.isTruthy(argument)) return Type.singleton(false);else if (Type.isFalsy(argument)) return Type.singleton(true);else return Type.boolean;
      });

    case "typeof":
      return synthAndThen(env, ast.argument, argument => {
        switch (argument.type) {
          case "Boolean":
            return Type.singleton("boolean");

          case "Function":
            return Type.singleton("function");

          case "Null":
            return Type.singleton("object");

          case "Number":
            return Type.singleton("number");

          case "Object":
            return Type.singleton("object");

          case "String":
            return Type.singleton("string");

          default:
            bug(`unexpected ${argument.type}`);
        }
      });

    default:
      bug(`unimplemented ${ast.operator}`);
  }
}

function synthConditional(env, ast) {
  const consequent = synth(narrow(env, ast.test, true), ast.consequent);
  const alternate = synth(narrow(env, ast.test, false), ast.alternate);
  return synthAndThen(env, ast.test, test => {
    if (Type.isTruthy(test)) return consequent;else if (Type.isFalsy(test)) return alternate;else return Type.union(consequent, alternate);
  });
}

function andThen(type, fn) {
  switch (type.type) {
    case "Union":
      return Type.union(...type.types.map(type2 => andThen(type2, fn)));

    case "Intersection":
      {
        let error = void 0;
        const intersection = Type.intersection(...type.types.map(type2 => {
          try {
            return fn(type2);
          } catch (e) {
            if (!error) error = e;
            return Type.unknown;
          }
        }));

        if (intersection.type === "Unknown") {
          if (!error) bug("expected defined error");
          throw error;
        } else {
          return intersection;
        }
      }

    default:
      return fn(type);
  }
}

function synthAndThen(env, ast, fn) {
  return andThen(synth(env, ast), fn);
}

export default function synth(env, ast) {
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

    case "ConditionalExpression":
      return synthConditional(env, ast);

    default:
      bug(`unimplemented ${ast.type}`);
  }
}