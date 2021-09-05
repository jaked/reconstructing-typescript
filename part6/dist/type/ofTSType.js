import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug } from "../util/err.js";
import * as Type from "./constructors.js";
import union from "./union.js";
import intersection from "./intersection.js";
export default function ofTSType(tsType) {
  switch (tsType.type) {
    case "TSParenthesizedType":
      return ofTSType(tsType.typeAnnotation);

    case "TSNeverKeyword":
      return Type.never;

    case "TSUnknownKeyword":
      return Type.unknown;

    case "TSNullKeyword":
      return Type.nullType;

    case "TSBooleanKeyword":
      return Type.boolean;

    case "TSNumberKeyword":
      return Type.number;

    case "TSStringKeyword":
      return Type.string;

    case "TSTypeLiteral":
      {
        const props = tsType.members.map(mem => {
          if (!AST.isTSPropertySignature(mem)) bug(`unimplemented ${mem.type}`);
          if (!AST.isIdentifier(mem.key)) bug(`unimplemented ${mem.key.type}`);
          if (!mem.typeAnnotation) bug(`expected type for ${mem.key.name}`);
          return {
            name: mem.key.name,
            type: ofTSType(mem.typeAnnotation.typeAnnotation)
          };
        });
        return Type.object(props);
      }

    case "TSFunctionType":
      {
        const args = tsType.parameters.map(param => {
          if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
          if (!param.typeAnnotation) bug(`expected type for ${param.name}`);
          if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.typeAnnotation.type}`);
          return ofTSType(param.typeAnnotation.typeAnnotation);
        });
        if (!tsType.typeAnnotation) bug(`expected return type`);
        const ret = ofTSType(tsType.typeAnnotation.typeAnnotation);
        return Type.functionType(args, ret);
      }

    case "TSLiteralType":
      switch (tsType.literal.type) {
        case "BooleanLiteral":
          return Type.singleton(tsType.literal.value);

        case "NumericLiteral":
          return Type.singleton(tsType.literal.value);

        case "StringLiteral":
          return Type.singleton(tsType.literal.value);

        default:
          bug(`unimplemented ${tsType.literal.type}`);
      }

    case "TSUnionType":
      return union(...tsType.types.map(ofTSType));

    case "TSIntersectionType":
      return intersection(...tsType.types.map(ofTSType));

    default:
      bug(`unimplemented ${tsType.type}`);
  }
}