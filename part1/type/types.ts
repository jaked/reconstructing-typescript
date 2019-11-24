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
