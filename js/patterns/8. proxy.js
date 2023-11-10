// Proxy (заместитель) - прослойка между пользователем и целевым объектом
// Примеры: виртуальный прокси (ленивая загрузка), логирующий прокси, кэширующий прокси

// Защищающий прокси

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.hasAccess(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    hasAccess(password) {
        return password === 'admin';
    }

    close() {
        this.door.close();
    }
}

class Door {
    open() {
        console.log('Opened!');
    }

    close() {
        console.log('Closed!');
    }
}

const secureDoor = new SecuritySystem(new Door());

console.log('---try to get in with "USER" password---');
secureDoor.open('user');

console.log('---try to get in with "ADMIN" password---');
secureDoor.open('admin');

secureDoor.close();

