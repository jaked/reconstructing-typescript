import * as Types from './types';
import * as Constructors from './constructors';
import * as Validators from './validators';
import IsSubtype from './isSubtype';
import ToString from './toString';
import OfTSType from './ofTSType';
import PropType from './propType';

module Type {
  export type Null = Types.Null;
  export type Boolean = Types.Boolean;
  export type Number = Types.Number;
  export type String = Types.String;
  export type Object = Types.Object;
  export type Function = Types.Function;

  export type Type = Types.Type;

  export const nullType = Constructors.nullType;
  export const boolean = Constructors.boolean;
  export const number = Constructors.number;
  export const string = Constructors.string;
  export const object = Constructors.object;
  export const functionType = Constructors.functionType;

  export const isNull = Validators.isNull;
  export const isBoolean = Validators.isBoolean;
  export const isNumber = Validators.isNumber;
  export const isString = Validators.isString;
  export const isObject = Validators.isObject;
  export const isFunction = Validators.isFunction;

  export const isSubtype = IsSubtype;
  export const toString = ToString;
  export const ofTSType = OfTSType;

  export const propType = PropType;
}

type Type = Type.Type;

export default Type;
