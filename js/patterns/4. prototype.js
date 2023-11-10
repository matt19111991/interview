// Прототип позволяет копировать объекты
// Из базовой реализации создаются клоны, которые можно изменять точечно

class CarPrototype {
    constructor(model, color, price) {
        this.color = color;
        this.model = model;
        this.price = price;
    }

    produce() {
        return new CarPrototype(this.model, this.color, this.price);
    }
}

const fordProduction = new CarPrototype('Ford', 'black', 20000);

const prototypeCar = fordProduction.produce(); // прототип
console.log('prototype car:', prototypeCar);

const yellowFordCar = prototypeCar; // клон 1
yellowFordCar.color = 'yellow';
console.log('yellow car:', yellowFordCar);

const redFordCar = prototypeCar; // клон 2
redFordCar.color = 'red';
console.log('red car:', redFordCar);
