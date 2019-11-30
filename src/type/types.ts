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
  properties: { name: string, type: Type }[];
}

export type Function = {
  type: 'Function';
  args: Type[];
  ret: Type;
}

export type Singleton = {
  type: 'Singleton';
  base: Boolean | Number | String;
  value: unknown;
}

export type Union = {
  type: 'Union';
  types: Type[];
}
