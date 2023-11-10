// 1, 1, 2, 3, 5, 8, 13, 21

const fibonacci = n => {
    if (n === 1 || n === 2) { // обязательное условие выхода из рекурсии, иначе бесконечный цикл
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Fibonacci 5:', fibonacci(5));
console.log('Fibonacci 8:', fibonacci(8));
