import {
  TSType
} from '@babel/types';

module Type {
  export type Type =
    Null |
    Boolean |
    Number |
    String |
    Object |
    Function |
    Singleton;

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

  export type Function = {
    type: 'Function';
    args: Type[];
    ret: Type;
  }

  type SingletonBoolean = {
    type: 'Singleton';
    base: Boolean;
    value: boolean;
  }

  type SingletonNumber = {
    type: 'Singleton';
    base: Number;
    value: number;
  }

  type SingletonString = {
    type: 'Singleton';
    base: String;
    value: string;
  }

  export type Singleton =
    SingletonBoolean |
    SingletonNumber |
    SingletonString;

  export const nullType: Null = { type: 'Null' };
  export const boolean: Boolean = { type: 'Boolean' };
  export const number: Number = { type: 'Number' };
  export const string: String = { type: 'String' };

  export function object(properties: { [name: string]: Type }): Object {
    return { type: 'Object', properties }
  }

  export function functionType(args: Type[], ret: Type): Function {
    return { type: 'Function', args, ret };
  }

  export function singleton(value: boolean): SingletonBoolean
  export function singleton(value: number): SingletonNumber
  export function singleton(value: string): SingletonString
  export function singleton(value: boolean | number | string): Singleton {
    switch (typeof value) {
      case 'boolean': return { type: 'Singleton', base: boolean, value };
      case 'number': return { type: 'Singleton', base: number, value };
      case 'string': return { type: 'Singleton', base: string, value };
      default: throw 'expected boolean | number | string';
    }
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

      case 'Function': {
        const args = type.args.map(toString);
        return `(${args.join(', ')}) => ${type.ret}`
      }

      case 'Singleton':
        if (type.base.type === 'String')
          return `'${type.value}'`;
        else
          return `${type.value}`;
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
}

type Type = Type.Type;

export default Type;
