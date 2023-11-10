// Приведение массива к одноуровневой вложенности
// flat([1, [2, [3, [4,5]]]])) => [1, 2, 3, 4, 5]

const array = [1, [2, [3, [4,5]]]];

function flat(arr) {
    let res = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flat(item));
        } else {
            res.push(item);
        }
    });

    return res;
}

// Native [].flat();
// console.log('One level array:', array.flat(Infinity));

console.log('One level array:', flat(array));
