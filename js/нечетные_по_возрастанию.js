/*
* Дан массив чисел
* Нечетные должны быть отсортированы по возрастанию
* Четные должны остаться на своих местах
* */

const numbersArray = [7, 3, 4, 9, 5, 2, 17]; // [3, 5, 4, 7, 9, 2, 17]

function transformNumbers(numbers) {
  const odd = [];  // нечетные
  const even = []; // четные

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { // четное
      even.push({ key: i, value: numbers[i] });
    } else { // нечетное
      odd.push(numbers[i]);
    }
  }

  const result = odd.sort((a, b) => a - b); // по возрастанию

  even.forEach(item => {
    result.splice(item.key, 0, item.value);
  })

  return result;
}

// function transformNumbers(arr) {
//   arr.forEach((item, index) => {
//     if (item % 2 === 1) { // нечетные
//       let sortNumber = item;
//
//       for (let i = 0; i < index; i++) {
//         if (arr[i] % 2 === 1) { // нечетные
//           if (arr[i] > sortNumber) {
//             const tmp = sortNumber;
//
//             sortNumber = arr[i];
//             arr[i] = tmp;
//           }
//         }
//       }
//
//       arr[index] = sortNumber;
//     }
//   });
//
//   return arr;
// }

const sortedNumbers = transformNumbers(numbersArray);

console.log('sorted numbers =>', sortedNumbers);
