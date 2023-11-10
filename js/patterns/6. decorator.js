// Декоратор для расширения функционала объектов за счет дополнительной обертки
// Уменьшение подклассов с похожим функционалом, достаточно обернуть в декоратор
// существующий класс и расширить его функционал

class BaseCar {
    constructor(model) {
        this.info = model;
        this.price = 10000;
    }

    getInfo() {
        return this.info;
    }

    getPrice() {
        return this.price;
    }
}

class Ford extends BaseCar {
    constructor(model) {
        super(model);

        this.price = 20000;
    }
}


class AutoPilotDecorator {
    constructor(car) {
        this.car = car;
    }

    getInfo() {
        return `${this.car.getInfo()} with autopilot`;
    }

    getPrice() {
        return this.car.getPrice() + 2000;
    }
}

class ParktronicDecorator {
    constructor(car) {
        this.car = car;
    }

    getInfo() {
        return `${this.car.getInfo()} with parktronik`;
    }

    getPrice() {
        return this.car.getPrice() + 4000;
    }
}

let ford = new Ford('Ford');
ford = new AutoPilotDecorator(ford);
ford = new ParktronicDecorator(ford);

console.log('Ford Car info:', ford.getInfo());
console.log('Ford Car price:', ford.getPrice());
