// Фабричный метод используется для создания множества однотипных объектов
// (одинаковая структура и разные входные данные)

// класс фабрики

class Factory {
    create(type) {
        switch (type) {
            case 'Fiesta': return new Ford(type, '2020', 20000);
            case 'Fusion': return new Ford(type, '2018', 40000);
            case 'Focus': return new Ford(type, '2012', 10000);
            default: return new Ford('Mondeo', '2005', 5000);
        }
    }
}

// класс конструктор

class Ford {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

const factory = new Factory();

const fiesta = factory.create('Fiesta');
const focus = factory.create('Focus');
const mondeo = factory.create();

console.log('Ford Fiesta =>', fiesta);
console.log('Ford Focus =>', focus);
console.log('Ford Mondeo =>', mondeo);
