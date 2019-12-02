import * as AST from '@babel/types';
import { bug, err } from '../util/err';
import * as Types from './types';
import * as Type from './constructors';

export default function ofTSType(tsType: AST.TSType): Types.Type {
  switch (tsType.type) {
    case 'TSNullKeyword': return Type.nullType;
    case 'TSBooleanKeyword': return Type.boolean;
    case 'TSNumberKeyword': return Type.number;
    case 'TSStringKeyword': return Type.string;

    case 'TSTypeLiteral': {
      const props =
        tsType.members.map(mem => {
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

    case 'TSFunctionType': {
      const args =
        tsType.parameters.map(param => {
          if (!AST.isIdentifier(param)) bug(`unimplemented ${param.type}`);
          if (!param.typeAnnotation) bug(`expected type for ${param.name}`);
          if (!AST.isTSTypeAnnotation(param.typeAnnotation)) bug(`unimplemented ${param.typeAnnotation.type}`);
          return ofTSType(param.typeAnnotation.typeAnnotation);
        });
      if (!tsType.typeAnnotation) bug(`expected return type`);
      const ret = ofTSType(tsType.typeAnnotation.typeAnnotation);
      return Type.functionType(args, ret);
    }

    default: bug(`unimplemented ${tsType.type}`);
  }
}
