function cashFunction(func) {
    const cache = {};

    return function (n) {
        if (cache[n]) {
            console.log('---From cache---');
            return cache[n];
        }

        let result = func(n);

        console.log('---From function---');

        cache[n] = result;

        return result;
    }
}

function factorial(n) {
    let result = 1;

    while (n !== 1) {
        result *= n;
        n -= 1;
    }

    return result;
}

const cacheFactorial = cashFunction(factorial);

cacheFactorial(5);
cacheFactorial(3);
cacheFactorial(5);
cacheFactorial(2);
