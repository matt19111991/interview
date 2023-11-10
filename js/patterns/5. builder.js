// Builder используется для создания объектов со сложной логикой инициализации (в constructor)
// Методы вызываются по цепочке
// Служит для упрощения constructor

class Builder {
    constructor(name) {
        this.car = new BaseCar(name);
    }

    addAutoPilot(hasAutoPilot) {
        this.car.autopilot = hasAutoPilot;
        return this; // для вызова методов по цепочке: new Builder('Fiat').addAutoPilot().build();
    }

    addParktronic(hasParktronic) {
        this.car.parktronic = hasParktronic;
        return this;
    }

    build() {
        return this.car;
    }
}

class BaseCar {
    constructor(name) {
        this.name = name;
        this.autopilot = false;
        this.parktronic = false;
    }
}

const baseCar = new Builder('Ford').build();

const modifiedCar =
    new Builder('Fiat')
        .addAutoPilot(true)
        .addParktronic(true)
        .build();

console.log('base car:', baseCar);
console.log('modified car:', modifiedCar);
