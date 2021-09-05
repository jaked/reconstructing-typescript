export default function propType(type, name) {
  const prop = type.properties.find(({
    name: propName
  }) => propName === name);
  if (prop) return prop.type;
}