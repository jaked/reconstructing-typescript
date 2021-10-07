import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import * as Trace from "../util/trace.js";
import Type from "../type/index.js";
import check from "./check.js";
import { narrow, narrowType } from "./narrow.js";
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
  return andThen(object, Trace.instrument("andThenMember", object2 => {
    if (!Type.isObject(object2)) err(". expects object", ast.object);
    const type = Type.propType(object2, prop.name);
    if (!type) err(`no such property ${prop.name}`, prop);
    return type;
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
  return andThen(callee, Trace.instrument("andThenCall", callee2 => {
    if (!Type.isFunction(callee2)) err(`call expects function`, ast.callee);
    if (callee2.args.length !== ast.arguments.length) err(`expected ${callee2.args.length} args, got ${ast.arguments.length} args`, ast);
    callee2.args.forEach((type, i) => {
      const arg = ast.arguments[i];
      if (!AST.isExpression(arg)) bug(`unimplemented ${arg.type}`);
      check(env, arg, type);
    });
    return callee2.ret;
  }));
});
const synthBinary = Trace.instrument("synthBinary", function synthBinary2(env, ast) {
  if (!AST.isExpression(ast.left)) bug(`unimplemented ${ast.left.type}`);
  const left = synth(env, ast.left);
  const right = synth(env, ast.right);
  return andThen(left, right, Trace.instrument(`andThenBinary[${ast.operator}]`, (left2, right2) => {
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
  }));
});
const synthLogical = Trace.instrument("synthLogical", function synthLogical2(env, ast) {
  const left = synth(env, ast.left);
  const right = synth(narrow(env, ast.left, ast.operator === "&&"), ast.right);
  return andThen(left, right, Trace.instrument(`andThenLogical[${ast.operator}]`, (left2, right2) => {
    switch (ast.operator) {
      case "&&":
        if (Type.isFalsy(left2)) return left2;else if (Type.isTruthy(left2)) return right2;else return Type.union(narrowType(left2, Type.falsy), right2);

      case "||":
        if (Type.isTruthy(left2)) return left2;else if (Type.isFalsy(left2)) return right2;else return Type.union(narrowType(left2, Type.truthy), right2);

      default:
        bug(`unimplemented ${ast.operator}`);
    }
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

const synthUnary = Trace.instrument("synthUnary", function synthUnary2(env, ast) {
  const argument = synth(env, ast.argument);
  return andThen(argument, Trace.instrument("andThenUnary", argument2 => {
    switch (ast.operator) {
      case "!":
        if (Type.isTruthy(argument2)) return Type.singleton(false);else if (Type.isFalsy(argument2)) return Type.singleton(true);else return Type.boolean;

      case "typeof":
        return Type.singleton(typeofType(argument2));

      default:
        bug(`unimplemented ${ast.operator}`);
    }
  }));
});
const synthConditional = Trace.instrument("synthConditional", function synthConditional2(env, ast) {
  const test = synth(env, ast.test);
  const consequent = synth(narrow(env, ast.test, true), ast.consequent);
  const alternate = synth(narrow(env, ast.test, false), ast.alternate);
  return andThen(test, Trace.instrument("andThenConditional", test2 => {
    if (Type.isTruthy(test2)) return consequent;else if (Type.isFalsy(test2)) return alternate;else return Type.union(consequent, alternate);
  }));
});

function andThen2Union(t1, t2, fn) {
  const t1s = Type.isUnion(t1) ? t1.types : [t1];
  const t2s = Type.isUnion(t2) ? t2.types : [t2];
  const ts = [];

  for (const t12 of t1s) {
    for (const t22 of t2s) {
      ts.push(andThen(t12, t22, fn));
    }
  }

  return Type.union(...ts);
}

function andThen2Intersection(t1, t2, fn) {
  const t1s = Type.isIntersection(t1) ? t1.types : [t1];
  const t2s = Type.isIntersection(t2) ? t2.types : [t2];
  const ts = [];
  let error = void 0;

  for (const t12 of t1s) {
    for (const t22 of t2s) {
      try {
        ts.push(fn(t12, t22));
      } catch (e) {
        if (!error) error = e;
      }
    }
  }

  if (ts.length === 0) {
    throw error;
  } else {
    return Type.intersection(...ts);
  }
}

function andThen2(t1, t2, fn) {
  if (Type.isUnion(t1) || Type.isUnion(t2)) {
    return Trace.instrument("andThen", andThen2Union)(t1, t2, fn);
  } else if (Type.isIntersection(t1) || Type.isIntersection(t2)) {
    return Trace.instrument("andThen", andThen2Intersection)(t1, t2, fn);
  } else {
    return fn(t1, t2);
  }
}

function andThen1Union(t, fn) {
  return Type.union(...t.types.map(t2 => andThen(t2, fn)));
}

function andThen1Intersection(t, fn) {
  return andThen2Intersection(t, Type.never, fn);
}

function andThen1(t, fn) {
  if (Type.isUnion(t)) {
    return Trace.instrument("andThen", andThen1Union)(t, fn);
  } else if (Type.isIntersection(t)) {
    return Trace.instrument("andThen", andThen1Intersection)(t, fn);
  } else {
    return fn(t);
  }
}

const andThen = (...args) => {
  switch (args.length) {
    case 2:
      return andThen1(args[0], args[1]);

    case 3:
      return andThen2(args[0], args[1], args[2]);

    default:
      bug(`unexpected ${args.length}`);
  }
};

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

    case "ConditionalExpression":
      return synthConditional(env, ast);

    default:
      bug(`unimplemented ${ast.type}`);
  }
});
export default synth;