// carryEmpty работает с цепочками вызовов. Последний вызов должен быть без аргументов
// carryEmpty(2)(3)(4)() => 9

function carryEmpty(a) {
    const stored = a;

    return function (b) {
        if (b !== undefined) {
            return carryEmpty(stored + b);
        } else {
            return stored;
        }
    }
}

console.log('---Пустые скобки в конце (2)(3)(4)() =>', carryEmpty(2)(3)(4)());

function carryUniversal(value) {
    let acc = value;

    function addNext(next) {
        acc += next;
        return addNext;
    }

    addNext.toString = addNext.valueOf = function() {
        return acc;
    }

    return addNext;
}

console.log('---Непустые скобки в конце (2)(3)(4) =>', +carryUniversal(2)(3)(4));

// carryPolymorph работает с 2умя аргументами через запятую и вызовы цепочек функций
// carryPolymorph(2, 3) => 5
// carryPolymorph(2)(3) => 5

function carryPolymorph(a, b) {
    if (b !== undefined) {
        return a + b;
    } else {
        return function (b) {
            return a + b;
        }
    }
}

console.log('---Полиморф для 2ух аргументов (2, 3) =>', carryPolymorph(2, 3));
console.log('---Полиморф для 2ух аргументов (2)(3) =>', carryPolymorph(2)(3));
