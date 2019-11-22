import {
  TSType
} from '@babel/types';

module Type {
  export type Type =
    Null |
    Boolean |
    Number |
    String |
    Object;

  export type Null = {
    type: 'Null';
  }

  export type Boolean = {
    type: 'Boolean';
  }

  export type Number = {
    type: 'Number';
  }

  export type String = {
    type: 'String';
  }

  export type Object = {
    type: 'Object';
    properties: { [name: string]: Type };
  }

  export const nullType: Null = { type: 'Null' };
  export const boolean: Boolean = { type: 'Boolean' };
  export const number: Number = { type: 'Number' };
  export const string: String = { type: 'String' };

  export function object(properties: { [name: string]: Type }): Object {
    return { type: 'Object', properties }
  }

  export function toString(type: Type): string {
    switch (type.type) {
      case 'Null':    return 'null';
      case 'Boolean': return 'boolean';
      case 'Number':  return 'number';
      case 'String':  return 'string';

      case 'Object': {
        const props =
          Object.entries(type.properties).map(([ name, type ]) => `${name}: ${toString(type)}`);
        return `{ ${props.join(', ')} }`;
      }
    }
  }

  export function ofTSType(tsType: TSType): Type {
    switch (tsType.type) {
      case 'TSNullKeyword': return nullType;
      case 'TSBooleanKeyword': return boolean;
      case 'TSNumberKeyword': return number;
      case 'TSStringKeyword': return string;

      case 'TSTypeLiteral': {
        const props =
          tsType.members.reduce<{ [name: string]: Type }>(
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

      default: throw `unimplemented ${tsType.type}`;
    }
  }
}

type Type = Type.Type;

export default Type;
