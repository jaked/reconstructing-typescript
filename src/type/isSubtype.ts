import { Type } from './types';

export default function isSubtype(a: Type, b: Type): boolean {
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

  return false;
}
