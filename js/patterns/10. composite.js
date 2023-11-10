// Компоновщик позволяет работать с древовидной структурой объектов с одинаковыми интерфейсами
// Взаимодействие происходит через вложенные компоненты в корневой объект
// Если у вложенных компонентов есть другие вложенные компоненты, взаимодействие идет также через них
// Единый интерфейс вызова, идет делегирование вызовов во вложенные компоненты

class Equipment {
    getInfo() {
        return this.name;
    }

    getPrice() {
        return this.price || 0;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Wheel extends Equipment {
    constructor() {
        super();

        this.setName('Wheel');
        this.setPrice(100);
    }
}

class Engine extends Equipment {
    constructor() {
        super();

        this.setName('Engine');
        this.setPrice(2000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();

        this.setName('Tools');
        this.setPrice(10);
    }
}

class Composite extends Equipment {
    constructor() {
        super();

        this.equipment = [];
    }

    addEquipmentElement(equipmentElement) {
        this.equipment.push(equipmentElement);
    }

    getPrice() {
        return this.equipment
            .map(equipmentElement => equipmentElement.getPrice())
            .reduce((sum, price) => sum += price);
    }
}

class Car extends Composite {
    constructor() {
        super();

        this.setName('Ford');
    }
}

const car = new Car();

car.addEquipmentElement(new Wheel());
car.addEquipmentElement(new Wheel());
car.addEquipmentElement(new Wheel());
car.addEquipmentElement(new Wheel());

car.addEquipmentElement(new Engine());

car.addEquipmentElement(new Tools());
car.addEquipmentElement(new Tools());
car.addEquipmentElement(new Tools());

console.log(`${car.getInfo()} price: ${car.getPrice()}$`);
