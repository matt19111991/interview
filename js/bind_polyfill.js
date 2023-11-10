function bind(func, context) {
    return function (...args) {
        return func.apply(context, args);
    }
}

function testFunction() {
    return this;
}

const testObject = {
    user: 'Bill',
};

const bindFunction = bind(testFunction, testObject);

console.log('Bind function context:', bindFunction());
