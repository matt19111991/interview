function myPromiseAll(promises) {
    const results = []; // to store results

    let completed = 0; // to keep track of resolved promises

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            // вместо promise.then() используем Promise.resolve(promise)
            // для преобразования "не промисных значений" в "промисные"
            // и для связки их через .then()

            // Promise.resolve(promise) === promise
            Promise.resolve(promise)
                .then(res => {
                    results[index] = res;

                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err));
        });
    });
}

const promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 0);
});

const promise3 = 'Promise 3 resolved';

const promiseAll = myPromiseAll([promise1, promise2, promise3]);

promiseAll.then(result => {
    console.log('All promises resolved:', result);
});
