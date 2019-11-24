import { Type } from './types';

export default function toString(type: Type): string {
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
  }
}
