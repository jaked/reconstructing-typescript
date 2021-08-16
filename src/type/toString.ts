import { Type } from './types';

export default function toString(type: Type): string {
  switch (type.type) {
    case 'Null':    return 'null';
    case 'Boolean': return 'boolean';
    case 'Number':  return 'number';
    case 'String':  return 'string';

    case 'Object': {
      const props =
        type.properties.map(({ name, type }) =>
          `${name}: ${toString(type)}`
        );
      return `{ ${props.join(', ')} }`;
    }
  }
}
