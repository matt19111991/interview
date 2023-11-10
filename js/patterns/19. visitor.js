// Visitor (посетитель) расширяет функциональность классов, не меняя его начальную реализацию
// Пример: функционал стабильно работает, нужно добавить возможность экспорта данных
// Нет смысла добавлять экспорт в каждый класс и менять первоначальную логику
// Можно реализовать экспорт через Visitor

// Класс Visitor

function exportVisitor(auto) {
    if (auto instanceof Ford) {
        auto.export = console.log(`---Exported Ford data: ${auto.info()}---`);
    }

    if (auto instanceof Tesla) {
        auto.export = console.log(`---Exported Tesla data: ${auto.info()}---`);
    }
}

// Класс, который не должен меняться

class Auto {
    accept(visitor) { // связь класса с внешним миром
        visitor(this);
    }
}

// Класс, который не должен меняться

class Ford extends Auto {
    info() {
        return 'This is a Ford car';
    }
}

// Класс, который не должен меняться

class Tesla extends Auto {
    info() {
        return 'This is a Tesla car';
    }
}

const ford = new Ford();
const tesla = new Tesla();

ford.accept(exportVisitor);
tesla.accept(exportVisitor);
