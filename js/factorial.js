const factorial = n => {
    if (n === 1) { // обязательное условие выхода из рекурсии, иначе бесконечный цикл
        return n;
    }

    return n * factorial(n - 1);
}

// function factorial(n) {
//     let result = 1;
//
//     while (n !== 1) {
//         result *= n;
//         n -= 1;
//     }
//
//     return result;
// }


console.log('Factorial 3:', factorial(3));
console.log('Factorial 5:', factorial(5));
