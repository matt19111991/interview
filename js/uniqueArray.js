// Должен возвращаться массив с уникальными значениями
// unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) => [1, 2, 4, 3, 7]

function unique(arr) {
    return [...new Set(arr)];
}

// ForEach

// function unique(arr) {
//     const result = [];
//
//     arr.forEach(item => {
//        if (result.indexOf(item) === -1) {
//            result.push(item);
//        }
//     });
//
//     return result;
// }

// Object keys & object

// function unique(arr) {
//     const res = {};
//
//     arr.forEach(item => {
//         res[item] = '';
//     });
//
//     return Object.keys(res).map(item => Number(item));
// }

// Filter & 3rd argument in filter

// function unique(arr) {
//     return arr.filter((item, index, self) => (self.indexOf(item) === index));
// }

console.log('Unique:', unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));
