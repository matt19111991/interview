// Facade скрывает сложную логику и наружу выдает простой интерфейс взаимодействия

class Facade {
    constructor(operations) {
        this.operations = operations;
    }

    assembleCar() {
        this.operations.installEngine();
        this.operations.addElectronics();
        this.operations.addWheels();
        this.operations.addSeatBelts();
        this.operations.installLights();
    }
}

class Conveyor {
    installEngine() {
        console.log('---Engine installed---');
    }

    addElectronics() {
        console.log('---Electronics added---');
    }

    addWheels() {
        console.log('---Wheels added---');
    }

    addSeatBelts() {
        console.log('---Seat belts added---');
    }

    installLights() {
        console.log('---Lights installed---');
    }
}

const carOperations = new Conveyor();

new Facade(carOperations).assembleCar();
