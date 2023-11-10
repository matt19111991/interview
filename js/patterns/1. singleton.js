// Singleton существует в системе в одном экземпляре с глобальной точкой доступа
// Примеры: корзина интернет магазина, карта клиента, музыкальный плеер

// Статическое свойство конструктора

class CounterStatic {
    constructor() {
        if (typeof CounterStatic.instance === 'object') {
            return CounterStatic.instance;
        }

        this.count = 0;

        CounterStatic.instance = this;

        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const counterStatic = new CounterStatic();
const counterStatic2 = new CounterStatic();

counterStatic.increaseCount();
counterStatic.increaseCount();

counterStatic2.increaseCount();
counterStatic2.increaseCount();

console.log('static counter 1:', counterStatic.getCount());
console.log('static counter 2:', counterStatic2.getCount());

// Глобальная переменная

let instance;

class CounterGlobal {
    constructor() {
        if (!instance) {
            instance = this;
        }

        instance.count = 0;

        return instance;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        instance.count++;
    }
}

const counterGlobal = new CounterGlobal();
const counterGlobal2 = new CounterGlobal();

counterGlobal.increaseCount();
counterGlobal.increaseCount();

counterGlobal2.increaseCount();
counterGlobal2.increaseCount();

// console.log('global counter 1:', counterGlobal.getCount());
// console.log('global counter 2:', counterGlobal2.getCount());
