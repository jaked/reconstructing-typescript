import * as AST from "../../_snowpack/pkg/@babel/types.js";
import { bug, err } from "../util/err.js";
import * as Type from "./constructors.js";
export default function ofTSType(tsType) {
  switch (tsType.type) {
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
          if (!mem.typeAnnotation) err(`type required for ${mem.key.name}`, mem);
          return {
            name: mem.key.name,
            type: ofTSType(mem.typeAnnotation.typeAnnotation)
          };
        });
        return Type.object(props);
      }

    default:
      bug(`unimplemented ${tsType.type}`);
  }
}