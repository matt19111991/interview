// Observer (наблюдатель) создает подписку, чтобы одним объектам следить за другими объектами
// Пример: подписка на новостную рассылку

class AutoNews {
    constructor() {
        this.news = '';
        this.subscribers = [];
    }

    setNews(news) {
        this.news = news;

        this.notifyAll();
    }

    notifyAll() {
        this.subscribers.forEach(subscriber => {
            subscriber.inform(this);
        });
    }

    subscribe(user) {
        this.subscribers.push(user);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber.getName() !== user.getName());
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    inform(message) {
        console.log(`---Fresh news for ${this.name}: ${message.news}---`);
    }
}

const jack = new User('Jack');
const john = new User('John');

const autoNews = new AutoNews();

autoNews.subscribe(jack);
autoNews.subscribe(john);

autoNews.setNews('New Ford Fiesta for 12000$');

console.log('---John has declined subscription---');

autoNews.unsubscribe(john);

autoNews.setNews('New updates 2023!');
