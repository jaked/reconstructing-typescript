export type Type =
  Never |
  Null |
  Boolean |
  Number |
  String |
  Object |
  Function |
  Singleton |
  Union;

export type Never = {
  type: 'Never';
}

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

export type SingletonBoolean = {
  type: 'Singleton';
  base: Boolean;
  value: boolean;
}

export type SingletonNumber = {
  type: 'Singleton';
  base: Number;
  value: number;
}

export type SingletonString = {
  type: 'Singleton';
  base: String;
  value: string;
}

export type Singleton =
  SingletonBoolean |
  SingletonNumber |
  SingletonString;

export type Union = {
  type: 'Union';
  types: Type[];
}
