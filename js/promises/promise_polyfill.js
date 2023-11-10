const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function CustomPromise(executor) {
    let state = PENDING;
    let value = null;

    const handlers = [];
    const catchers = [];

    function resolve(result) {
        if (state !== PENDING) return;

        state = FULFILLED;
        value = result;

        handlers.forEach(handler => handler(value));
    }

    function reject(error) {
        if (state !== PENDING) return;

        state = REJECTED;
        value = error;

        catchers.forEach(catcher => catcher(value));
    }

    this.then = function(successCallback) {
        if (state === FULFILLED) {
            successCallback(value);
        } else {
            handlers.push(successCallback);
        }

        return this;
    }

    this.catch = function(failureCallback) {
        if (state === REJECTED){
            failureCallback(value);
        } else {
            catchers.push(value);
        }
    }

    executor(resolve, reject);
}

// Added:
CustomPromise.resolve = value => new CustomPromise(fulfil => fulfil(value));
CustomPromise.reject = error => new CustomPromise((_, reject) => reject(error));

// Demo
let promise1 = CustomPromise.resolve(42);
let promise2 = CustomPromise.reject('Custom error');

promise1.then(value => console.log('Resolved:', value));
promise2.catch(error => console.log('Rejected:', error));
