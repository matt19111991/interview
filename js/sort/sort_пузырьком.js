// В массиве сравниваем попарно лежащие элементы
// Если следующий элемент меньше предыдущего, то меняем их местами

// O(n2)

const numbers = [5, 9, 1, 4, 6, 11, 15, 14, 8, 2, 3, 10, 7, 13, 12];

let iterations = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // Если следующий элемент меньше предыдущего, то меняем их местами
            if (arr[j + 1] < arr[j]) {
                // меняем элементы местами
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            iterations++;
        }
    }

    return arr;
}

console.log('Result:', bubbleSort(numbers));
console.log('Iterations:', iterations)
