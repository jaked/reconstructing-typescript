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
