import {
  TSType
} from '@babel/types';
import { bug, err } from '../util/err';
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
            if (mem.type !== 'TSPropertySignature') bug(`unimplemented ${mem.type}`);
            if (mem.key.type !== 'Identifier') bug(`unimplemented ${mem.key.type}`);
            if (!mem.typeAnnotation) err(`type required for ${mem.key.name}`, mem);
            const type = ofTSType(mem.typeAnnotation.typeAnnotation);
            return Object.assign(obj, { [mem.key.name]: type });
          },
          { }
        );
      return Type.object(props);
    }

    default: bug(`unimplemented ${tsType.type}`);
  }
}
