/*
* Реализовать метод для глубокого копирования примитивов, объектов, массивов
* */

function deepClone(source) {
  if (source === null) return null;
  if (typeof source !== 'object') return source;

  let clone = Object.assign({}, source);

  if (Array.isArray(source)) {
    clone.length = source.length;

    // Array.from() позволяет создавать массивы из
    // массивоподобных объектов (со свойством length и элементами по индексным ключам)

    return Array.from(clone);
  }

  return clone;
}

console.log('deepClone simple object =>', deepClone({ a: 1, b: 'string', c: true }));

console.log('deepClone nested object =>',
  deepClone({ a: 2, b: '1 level', c: { d: { e: '3 level' } }, f: '2 level' }
));

console.log('deepClone simple array =>', deepClone([1, 2, 3, 4, 5]));
console.log('deepClone nested array =>', deepClone([1, 2, [3, 4, 5, [6, 7, 8, 9]]]));

console.log('deepClone string =>', deepClone('test string'));
console.log('deepClone number =>', deepClone(4));
console.log('deepClone boolean =>', deepClone(true));

console.log('deepClone null =>', deepClone(null));
