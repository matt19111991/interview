// Массив должен быть отсортирован

// O(Log2n)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let iterations = 0;

function binarySearch(arr, item, start, end) {
    iterations++;

    let middle = Math.floor((start + end) / 2);

    if (item === arr[middle]) {
        return middle;
    }

    if (item < arr[middle]) {
        return binarySearch(arr, item, start, middle - 1);
    } else {
        return binarySearch(arr, item, middle + 1, end);
    }
}

console.log('Result:', binarySearch(numbers, 4, 0, numbers.length));
console.log('Iterations:', iterations)
