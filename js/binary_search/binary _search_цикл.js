// Массив должен быть отсортирован

// O(Log2n)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let iterations = 0;

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;

    let middle;

    let found = false;
    let position = -1; // по умолчанию элемент не найден

    while (found === false && start <= end) {
        iterations++;

        middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
            found = true;
            position = middle;

            return position;
        }

        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
}

console.log('Result:', binarySearch(numbers, 4));
console.log('Iterations:', iterations)
