// Есть массив букв. Некоторые буквы повторяются
// Сделать функцию, которая возвращает объект с количеством повторений каждой буквы

// ['a', 'b', 'c', 'a', 'b', 'd', 'c'] => { a: 2, b: 2, c: 2, d: 1 }

const array = ['a', 'b', 'c', 'a', 'b', 'd', 'c'];

function countCharRepeat(chars) {
    const result = {};

    for (let char of chars) {
        result[char] = char in result ? result[char] + 1 : 1;
    }

    return result;
}

console.log('Result:', countCharRepeat(array));
