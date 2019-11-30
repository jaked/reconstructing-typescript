import { Type } from './types';

export default function isSubtype(a: Type, b: Type): boolean {
  if (a.type === 'Never') return true;

  if (a.type === 'Union') return a.types.every(a => isSubtype(a, b));
  if (b.type === 'Union') return b.types.some(b => isSubtype(a, b));

  if (a.type === 'Intersection') return a.types.some(a => isSubtype(a, b));
  if (b.type === 'Intersection') return b.types.every(b => isSubtype(a, b));

  if (a.type === 'Null' && b.type === 'Null') return true;
  if (a.type === 'Boolean' && b.type === 'Boolean') return true;
  if (a.type === 'Number' && b.type === 'Number') return true;
  if (a.type === 'String' && b.type === 'String') return true;

  if (a.type === 'Object' && b.type === 'Object') {
    return Object.entries(b.properties).every(([name, bType]) => {
      const aType = a.properties[name];
      if (!aType) return false;
      else return isSubtype(aType, bType);
    });
  }

  if (a.type === 'Function' && b.type === 'Function') {
    return a.args.length === b.args.length &&
      a.args.every((a, i) => isSubtype(b.args[i], a)) &&
      isSubtype(a.ret, b.ret);
  }

  if (a.type === 'Singleton') {
    if (b.type === 'Singleton')
      return a.value === b.value;
    else
      return isSubtype(a.base, b);
  }

  return false;
}

export function equiv(a: Type, b: Type): boolean {
  return isSubtype(a, b) && isSubtype(b, a);
}

export function isPrimitiveSubtype(a: Type, b: Type): boolean {
  if (a.type === 'Never') return true;
  if (b.type === 'Unknown') return true;

  if (a.type === 'Singleton') {
    if (b.type === 'Singleton')
      return a.value === b.value;
    else
      return a.base.type === b.type;
  }

  return false;
}
