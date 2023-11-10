// Итератор дает возможность последовательно обходить объекты без раскрытия внутреннего представления

// Итератор сложных структур

class IteratorComplex {
    constructor(collection) {
        this.index = 0;
        this.keys = Object.keys(collection);
        this.collection = collection;
    }

    hasNext() {
        return this.index < this.keys.length;
    }

    next() {
        return this.collection[this.keys[this.index++]];
    }
}

const complexCollection = [
    { name: 'Ford', price: 21000, year: 2020 },
    { name: 'Tesla', price: 18000, year: 2018 },
    { name: 'Fiat', price: 12000, year: 2019 },
    { name: 'Toyota', price: 16000, year: 2014 },
    { name: 'Jeep', price: 13000, year: 2003 }
];

const complexIterator = new IteratorComplex(complexCollection);

while (complexIterator.hasNext()) {
    console.log('Iteration complex:', complexIterator.next());
}

console.log('------');

// Итератор простых структур

class IteratorSimple {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        return this.collection[this.index++];
    }
}

const simpleCollection = ['Ford', 'Tesla', 'Fiat', 'Toyota', 'Jeep'];

const simpleIterator = new IteratorSimple(simpleCollection);

while (simpleIterator.hasNext()) {
    console.log('Iteration simple:', simpleIterator.next());
}
