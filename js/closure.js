/*

Лексическое окружение getOuter после создания getOuter:

getOuterLexicalEnvironment = {
   environmentRecord: {
     counter: 0,
     <anonymous function> : < reference to function>
   }
   outer: <globalLexicalEnvironment>
}

// ----------------------------------------------------

Лексическое окружение getInner после создания getInner:

getInnerLexicalEnvironment = {
    environmentRecord: {}
    outer: <getOuterLexicalEnvironment>
}

Когда функция getInner() вызывается, JS начнет поиск в лексическом окружении
этой функции на наличие переменной counter

Если ее запись окружения пуста, то движок пойдёт искать
во внешнем лексическом окружении getOuterLexicalEnvironment

Движок находит переменную, выводит её в консоль и увеличивает переменную counter
в лексическом окружении getCounterLexicalEnvironment

// ----------------------------------------------------

Лексическое окружение getOuter после выполнения getInner() в первый раз:

getOuterLexicalEnvironment = {
    counter: 1,
    <anonymous function> : < reference to function>
  }
  outer: <globalLexicalEnvironment>
}

На каждом вызове функции getInner(),
JS создаёт новое лексическое окружение для функции getInner, увеличивает переменную count и
обновляет лексическое окружения функции getOuter, чтобы соответствовать изменениям.
*/

function getOuter() {
    let counter = 0;

    return function() { // <anonymous function>
        return counter++;
    }
}

const getInner = getOuter();

console.log(getInner());  // 0
console.log(getInner());  // 1
console.log(getInner());  // 2
