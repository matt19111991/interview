// Напишите код, который сделает из массива объект

const array = [
    { name: 'width', value: 10 },
    { name: 'height', value: 20 }
];

function transform(arr) {
    const obj = {};

    arr.forEach(item => {
        obj[item.name] = item.value;
    });

    return obj;
}

console.log('transformed object:', transform(array));
