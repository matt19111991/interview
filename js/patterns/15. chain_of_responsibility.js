// Цепочка обязанностей позволяет передавать запросы последовательно по цепочке обработчиков
// Каждый последующий обработчик решает: может ли он сам обработать запрос
// или же его нужно передать дальше по цепочке обработчиков
// Пример: оплата картой. Оплата пройдет по той карте, на которой достаточно средств

// Chain of responsibility class

class Account {
    canPay(amount) {
        return amount <= this.balance;
    }

    pay(amount) {
        if (this.canPay(amount)) {
            console.log(`Paid OK by ${this.name}`);
        } else if (this.nextCard) {
            console.log(`Can't pay by ${this.name}. Try to pay by ${this.nextCard.name}`);
            this.nextCard.pay(amount);
        } else {
            console.log("Sorry, can't pay at all");
        }
    }

    setNextCard(nextCard) {
        this.nextCard = nextCard;
    }
}

class MasterCard extends Account {
    constructor(balance) {
        super();

        this.balance = balance;
        this.name = 'Master card';
    }
}

class Qiwi extends Account {
    constructor(balance) {
        super();

        this.balance = balance;
        this.name = 'Qiwi';
    }
}

class PayPal extends Account {
    constructor(balance) {
        super();

        this.balance = balance;
        this.name = 'PayPal';
    }
}

const masterCard = new MasterCard(500);
const qiwi = new Qiwi(1000);
const payPal = new PayPal(15000);

masterCard.setNextCard(qiwi);
qiwi.setNextCard(payPal);

masterCard.pay(12000);
