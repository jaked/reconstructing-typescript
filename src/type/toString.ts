import { Type } from './types';
import { isFunction, isIntersection, isString, isUnion } from './validators';
import { bug } from '../util/err'

function toStringWithParens(type: Type) {
  const typeString = toString(type);
  if (isFunction(type) || isUnion(type) || isIntersection(type))
    return `(${typeString})`;
  else
    return typeString;
}

export default function toString(type: Type): string {
  switch (type.type) {
    case 'Never':   return 'never';
    case 'Unknown': return 'unknown';
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

    case 'Function': {
      const args = type.args.map(toString);
      return `(${args.join(', ')}) => ${toString(type.ret)}`
    }

    case 'Singleton':
      if (isString(type.base))
        return `'${type.value}'`;
      else
        return `${type.value}`;

    case 'Union':
      return type.types
        .map(toStringWithParens)
        .join(' | ');

    case 'Intersection':
      return type.types
        .map(toStringWithParens)
        .join(' & ');

    case 'Not':
      return `!${toStringWithParens(type.base)}`;

    default: bug(`unexpected ${(type as Type).type}`);
  }
}
