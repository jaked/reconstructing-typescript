import { Object, Type } from './types';

export default function propType(type: Object, name: string): Type | undefined {
  const prop = type.properties.find(({ name: propName }) => propName === name);
  if (prop) return prop.type;
}
