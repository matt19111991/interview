// State (состояние) изменяет поведение класса в зависимости от его состояния,
// создавая разные реакции на одни и те же данные внутри одного класса
// Пример: отслеживание статуса заказа - оплата, в пути, доставлено и различный фунционал для них
// Оплата (можно изменить адрес); в пути (не доступна оплата, нельзя изменить адрес)

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }

    cancelOrder() {
        this.state.name === 'waitingForPayment'
            ? console.log('---Order cancelled---')
            : console.log("---Can't cancel order---");
    }
}

const carOrder = new Order();
console.log('1:', carOrder.state.name);
// carOrder.cancelOrder();

carOrder.nextState();
console.log('2:', carOrder.state.name);
carOrder.cancelOrder();

carOrder.nextState();
console.log('3:', carOrder.state.name);
