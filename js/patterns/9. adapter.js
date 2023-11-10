// Adapter оборачивает несовместивый с чем-то объект в совместимый, не изменяя исходный код объекта
// Пример: нормализация данных

class OldEngine {
    beginOld() {
        console.log('Old Engine started...');
    }
}

class NewEngine {
    startNew() {
        console.log('New Engine is working...');
    }
}

class Car {
    ride(engine) {
        try {
            engine.startNew();
        } catch (e) {
            console.log('ERROR!')
        }
    }
}

class Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    startNew() {
        this.engine.beginOld();
    }
}

const oldEngine = new OldEngine();
const oldEngineWithAdapter = new Adapter(oldEngine);
const newEngine = new NewEngine();

const carNew = new Car();
console.log('---try to launch new engine---');
carNew.ride(newEngine);

const carOldWithAdapter = new Car();
console.log('---try to launch old engine with adapter---');
carOldWithAdapter.ride(oldEngineWithAdapter);

const carOld = new Car();
console.log('---try to launch old engine---');
carOld.ride(oldEngine);
