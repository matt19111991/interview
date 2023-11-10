// Делим массив на подмассивы (рекурсивно)
// Выбираем опорный элемент в массиве (чаще всего средний)
// Все элементы, которые меньше опорного - добавляем в один массив
// Все элементы, которые больше опорного - добавляем в другой массив
// Для каждого из массивов снова выбирается опорный элемент, а
// массив делится на 2 подмассива с меньшими значениями и большими
// И так до тех пор, пока длина массивов не станет равна 1

// O(log2n*n)

const numbers = [5, 9, 1, 4, 6, 11, 15, 14, 8, 2, 3, 10, 7, 13, 12];

let iterations = 0;

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2); // индекс опорного элемента
    let pivot = arr[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        iterations++;

        if (i === pivotIndex) {
            continue;
        }

        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('Result:', quickSort(numbers));
console.log('Iterations:', iterations)
