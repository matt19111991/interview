// Стратегия определяет схожие алгоритмы и помещает их в отдельные классы
// Между алгоритмами можно переключаться во время выполнения программы
// Используется для расширения возможностей приложения
// У стратегий должен быть один интерфейс взаимодействия

function baseStrategy(amount) {
    return amount * 0.9;
}

function goldStrategy(amount) {
    return amount * 0.75;
}

function platinumStrategy(amount) {
    return amount * 0.5;
}

// Context class

class Cart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

const baseCustomer = new Cart(baseStrategy);
const goldCustomer = new Cart(goldStrategy);
const platinumCustomer = new Cart(platinumStrategy);

baseCustomer.setAmount(5000);
goldCustomer.setAmount(5000);
platinumCustomer.setAmount(5000);

console.log('Base customer strategy:', baseCustomer.checkout());
console.log('Gold customer strategy:', goldCustomer.checkout());
console.log('Platinum customer strategy:', platinumCustomer.checkout());
