export type Type =
  Never |
  Unknown |
  Null |
  Boolean |
  Number |
  String |
  Object |
  Function |
  Singleton |
  Union |
  Intersection |
  Not;

export type Never = {
  type: 'Never';
}

export type Unknown = {
  type: 'Unknown';
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

export type Intersection = {
  type: 'Intersection';
  types: Type[];
}

export type Not = {
  type: 'Not';
  base: Type;
}
