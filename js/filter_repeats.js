/*
* Отобрать значения, которые встречаются только 1 раз
* */

const array = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9];

const withoutRepeat = (arr) => {
  return arr.reduce((result, element) => {
    if (result.includes(element)) {
      return result.filter(filteredElement => element !== filteredElement);
    } else {
      result.push(element);
      return result;
    }
  } ,[])
}

console.log('withoutRepeat(array)', withoutRepeat(array));
