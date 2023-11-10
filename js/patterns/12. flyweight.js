// Легковес (приспособленец, кэш)
// Позволяет вместить больше объектов в выделенную оперативную память
// Экономит ресурсы, исключает хранение одинаковых данных
// Неизменяемый, удобно работать через фабрики

class Car {
    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    }
}

class FlyWeightCarFactory {
    constructor() {
        this.cars = {};
    }

    addCar(name, price, year) { // factory method
        const car = this.cars[name];

        if (car) {
            return car;
        }

        this.cars[name] = new Car(name, price, year);

        return this.cars[name];
    }

    getCars() {
        return this.cars;
    }
}

const cars = new FlyWeightCarFactory();

cars.addCar('Ford', 20000, 2012);
cars.addCar('Tesla', 50000,  2020);
cars.addCar('Fiat', 75000, 2022);
cars.addCar('Tesla', 10000, 2008);

console.log('Сar list:', cars.getCars());
