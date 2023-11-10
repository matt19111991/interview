// Наследование через функцию-конструктор

function PersonFuncConst(name) {
    this.name = name;
}

function StudentFuncConst(name, studentId) {
    // Вызываем конструктор суперкласса для инициализации полей, унаследованных от него.
    PersonFuncConst.call(this, name);

    // Инициализация собственных полей объекта.
    this.studentId = studentId;
}

StudentFuncConst.prototype = Object.create(PersonFuncConst.prototype);
StudentFuncConst.prototype.constructor = StudentFuncConst;

// Наследование через ES6 классы

class PersonClass {
    constructor(name) {
        this.name = name;
    }
}

class StudentClass extends PersonClass {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }
}

const studentFuncConst = new StudentFuncConst('john', 23);
const studentClass = new StudentClass('john', 23);

console.log('Student function-constructor:', studentFuncConst);
console.log('Student ES6 class:', studentClass);
