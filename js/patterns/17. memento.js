// Memento (снимок) позволяет сохранять и восстанавливать предыдущее состояние объекта
// Пример: редактор кода с функцией восстановления

class Memento {
    constructor(value) {
        this.value = value;
    }
}

const creator = {
    save: (value) => new Memento(value),
    restore: (memento) => memento.value,
}

class StateKeeper {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
}

const stateKeeper = new StateKeeper();

stateKeeper.addMemento(creator.save('Hello'));
stateKeeper.addMemento(creator.save('Hello world'));
stateKeeper.addMemento(creator.save('Hello world !!!'));

console.log('Предпоследнее сохраненное значение:', creator.restore(stateKeeper.getMemento(1)));

