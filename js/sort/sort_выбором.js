// В массиве находим минимальное значение и меняем местами с первым элементом
// Снова ищем минимальное значение и меняем со вторым элементом и так далее

// O(0.5 * n2) ~ O(n2) - коэффициенты отбрасываются

const numbers = [5, 9, 1, 4, 6, 11, 15, 14, 8, 2, 3, 10, 7, 13, 12];

let iterations = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        // j = i + 1 => если элемент заменили, то игнорируем его при итерировании
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }

            iterations++;
        }

        // меняем элементы местами
        let temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }

    return arr;
}

console.log('Result:', selectionSort(numbers));
console.log('Iterations:', iterations)
