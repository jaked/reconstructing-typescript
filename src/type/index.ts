import * as Types from './types';
import * as Constructors from './constructors';
import * as Validators from './validators';
import Union from './union';
import IsSubtype from './isSubtype';
import ToString from './toString';
import OfTSType from './ofTSType';
import PropType from './propType';
import * as Truthiness from './truthiness';
import Map from './map';

module Type {
  export type Never = Types.Never;
  export type Null = Types.Null;
  export type Boolean = Types.Boolean;
  export type Number = Types.Number;
  export type String = Types.String;
  export type Object = Types.Object;
  export type Function = Types.Function;
  export type Singleton = Types.Singleton;
  export type Union = Types.Union;

  export type Type = Types.Type;

  export const never = Constructors.never;
  export const nullType = Constructors.nullType;
  export const boolean = Constructors.boolean;
  export const number = Constructors.number;
  export const string = Constructors.string;
  export const object = Constructors.object;
  export const functionType = Constructors.functionType;
  export const singleton = Constructors.singleton;
  export const union = Union;

  export const isNever = Validators.isNever;
  export const isNull = Validators.isNull;
  export const isBoolean = Validators.isBoolean;
  export const isNumber = Validators.isNumber;
  export const isString = Validators.isString;
  export const isObject = Validators.isObject;
  export const isFunction = Validators.isFunction;
  export const isSingleton = Validators.isSingleton;
  export const isUnion = Validators.isUnion;

  export const isSubtype = IsSubtype;
  export const map = Map;
  export const toString = ToString;
  export const ofTSType = OfTSType;

  export const propType = PropType;
  export const isTruthy = Truthiness.isTruthy;
  export const isFalsy = Truthiness.isFalsy;
}

type Type = Type.Type;

export default Type;
