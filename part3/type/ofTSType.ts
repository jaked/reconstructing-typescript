import {
  TSType
} from '@babel/types';
import * as Types from './types';
import * as Type from './constructors';

export default function ofTSType(tsType: TSType): Types.Type {
  switch (tsType.type) {
    case 'TSNullKeyword': return Type.nullType;
    case 'TSBooleanKeyword': return Type.boolean;
    case 'TSNumberKeyword': return Type.number;
    case 'TSStringKeyword': return Type.string;

    case 'TSTypeLiteral': {
      const props =
        tsType.members.reduce<{ [name: string]: Types.Type }>(
          (obj, mem) => {
            if (mem.type !== 'TSPropertySignature') throw `unimplemented ${mem.type}`;
            if (mem.key.type !== 'Identifier') throw `unimplemented ${mem.key.type}`;
            if (!mem.typeAnnotation) throw `type required for ${mem.key.name}`;
            const type = ofTSType(mem.typeAnnotation.typeAnnotation);
            return Object.assign(obj, { [mem.key.name]: type });
          },
          { }
        );
      return Type.object(props);
    }

    case 'TSFunctionType': {
      const args =
        tsType.parameters.map(param => {
          if (param.type !== 'Identifier') throw `unimplemented ${param.type}`;
          if (!param.typeAnnotation) throw `type required for ${param.name}`;
          if (param.typeAnnotation.type !== 'TSTypeAnnotation') throw `unimplemented ${param.typeAnnotation.type}`;
          return ofTSType(param.typeAnnotation.typeAnnotation);
        });
      if (!tsType.typeAnnotation) throw `return type required`;
      const ret = ofTSType(tsType.typeAnnotation.typeAnnotation);
      return Type.functionType(args, ret);
    }

    case 'TSLiteralType':
      switch (tsType.literal.type) {
        case 'BooleanLiteral': return Type.singleton(tsType.literal.value);
        case 'NumericLiteral': return Type.singleton(tsType.literal.value);
        case 'StringLiteral': return Type.singleton(tsType.literal.value);
        default: throw 'expected BooleanLiteral | NumericLiteral | StringLiteral';
      }

    default: throw `unimplemented ${tsType.type}`;
  }
}
