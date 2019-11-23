import * as Types from './types';
import * as Constructors from './constructors';
import ToString from './toString';
import OfTSType from './ofTSType';

module Type {
  export type Null = Types.Null;
  export type Boolean = Types.Boolean;
  export type Number = Types.Number;
  export type String = Types.String;
  export type Object = Types.Object;
  export type Function = Types.Function;
  export type Singleton = Types.Singleton;

  export type Type = Types.Type;

  export const nullType = Constructors.nullType;
  export const boolean = Constructors.boolean;
  export const number = Constructors.number;
  export const string = Constructors.string;
  export const object = Constructors.object;
  export const functionType = Constructors.functionType;
  export const singleton = Constructors.singleton;

  export const ofTSType = OfTSType;
  export const toString = ToString;
}

type Type = Type.Type;

export default Type;
