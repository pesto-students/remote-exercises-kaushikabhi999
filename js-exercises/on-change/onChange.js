const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, propertyName, receiver) {
      const value = Reflect.get(target, propertyName, receiver);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, propertyName, value) {
      onChangeFn();
      return Reflect.set(target, propertyName, value);
    },
    deleteProperty(target, propertyName) {
      if (propertyName in target) {
        onChangeFn();
        return Reflect.deleteProperty(target, propertyName);
      }
      return `property ${propertyName} not found`;
    },
    defineProperty(target, key, descriptor) {
      if (Reflect.defineProperty(target, key, descriptor)) {
        onChangeFn();
        return true;
      }
      return false;
    },
  };
  return new Proxy(obj, handler);
};

export { onChange };
