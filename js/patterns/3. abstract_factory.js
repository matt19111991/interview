// Абстрактная фабрика - интерфейс для группировки других фабрик

// Абстрактная фабрика

const abstractFactory = type => {
    return type === 'sport' ? new SportCarFactory() : new FamilyCarFactory();
};

// Фабрика Sport Car

class SportCarFactory {
    create(type) {
        switch (type) {
            case 'GT': return new FordGT();
            case 'RS': return new FordRS();
            default: return new FordMustang();
        }
    }
}

// Фабрика Family Car

class FamilyCarFactory {
    create(type) {
        switch (type) {
            case 'Focus': return new FordFocus();
            case 'Fiesta': return new FordFiesta();
            default: return new FordMondeo();
        }
    }
}

class FordGT {
    info() {
        console.log(this, 'is a sport car Ford GT');
    }
}

class FordRS {
    info() {
        console.log(this, 'is a sport car Ford RS');
    }
}

class FordMustang {
    info() {
        console.log(this, 'is a sport car Ford Mustang');
    }
}

class FordFocus {
    info() {
        console.log(this, 'is a family car Ford Focus');
    }
}

class FordFiesta {
    info() {
        console.log(this, 'is a family car Ford Fiesta');
    }
}

class FordMondeo {
    info() {
        console.log(this, 'is a family car Ford Mondeo');
    }
}

const familyCarFactory = abstractFactory('family');
const fiesta = familyCarFactory.create('Fiesta');
fiesta.info();

const sportCarFactory = abstractFactory('sport');
const gt = sportCarFactory.create('GT');
gt.info();
