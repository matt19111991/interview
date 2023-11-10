// Мост разделяет классы на абстракцию и реализацию. Наследование заменяется композицией
// Позволяет сократить количество подклассов (BlackFord, SilverFord, BlackTesla, SilverTesla)
// Классы могут меняться независимо друг от друга
// Абстракция не выполняет саму работу, а происходит делегирование в реализацию (Model)
// Реализация выполняет саму работу (Color)

class Color { // Мост (метод get())
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super('black');
    }
}

class SilverColor extends Color {
    constructor() {
        super('silver');
    }
}

class Model {
    constructor(color) {
        this.color = color;
    }
}

class Ford extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        console.log(`---Ford painted to ${this.color.get()} color---`);
    }
}

class Tesla extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        console.log(`---Tesla painted to ${this.color.get()} color---`);
    }
}

const ford = new Ford(new SilverColor());
ford.paint();

const tesla = new Tesla(new BlackColor());
tesla.paint();
