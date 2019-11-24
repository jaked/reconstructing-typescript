export type Type =
  Null |
  Boolean |
  Number |
  String |
  Object |
  Function;

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
