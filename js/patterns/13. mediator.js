// Посредник позволяет уменьшить связи между классами, вынося классовые связи в класс-посредник

// Mediator class

class Dealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();

        console.log(`Customer ${name} ordered ${auto} with ${info}`);

        this.addToCustomerList(name);
    }

    addToCustomerList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealer) {
        this.name = name;
        this.dealer = dealer;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealer.orderAuto(this, auto, info);
    }
}

const dealer = new Dealer();

const john = new Customer('John', dealer);
const jack = new Customer('Jack', dealer);

jack.makeOrder('Ford', 'parktronic');
john.makeOrder('Tesla', 'ABS');

console.log('Customers:', dealer.getCustomerList());
