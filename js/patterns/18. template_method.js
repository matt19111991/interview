// Шаблонный метод определяет базовые шаги исполнения алгоритма
// Описание деталей и выполнение каждого из шагов делегируется на соответствующие методы или подклассы
// Пример: этапы сборки авто без углубления в детали
// Произойдет ошибка, если не реализовать хотя бы один из методов

// Template method class

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronics();
        this.collectAccessories();
    }
}

class FordBuilder extends Builder {
    addEngine() {
        console.log('---Added engine to Ford---');
    }

    installChassis() {
        console.log('---Installed chassis to Ford---');
    }

    addElectronics() {
        console.log('---Added electronics to Ford---');
    }

    collectAccessories() {
        console.log('---Collected accessories for Ford---');
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('---Tesla engine added---');
    }

    installChassis() {
        console.log('---Tesla chassis installed---');
    }

    addElectronics() {
        console.log('---Tesla electronics added---');
    }

    collectAccessories() {
        console.log('---Tesla accessories collected---');
    }
}

const fordBuilder = new FordBuilder();
fordBuilder.build();

console.log('------');

const teslaBuilder = new TeslaBuilder();
teslaBuilder.build();
