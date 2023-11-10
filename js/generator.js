// Генераторы — это функции, из которых можно «выходить», и в которые можно «входить»
// по мере необходимости. Их контекст (привязки переменных) сохраняется между сеансами «входа».
// Генераторы объявляют как function*.
// Такая функция, при её первом вызове, не выполняет код, возвращая особый объект, 'генератор',
// который позволяет управлять её выполнением.
// Для получения очередного значения, выдаваемого генератором, нужно вызвать его метод next().
// Благодаря этому выполняется код функции до тех пор, пока в нём не встретится
// ключевое слово yield, возвращающее значение.

// Функцию-генератор можно вызывать сколько угодно раз.
// Каждый раз будет возвращаться новый генератор.
// Но каждый генератор можно обойти лишь один раз.

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;

    for (let i = start; i < end; i += step) {
        iterationCount++;

        yield i;
    }

    return iterationCount;
}

const generator = makeRangeIterator(0, 3);

console.log('Generator 1:', generator.next());
console.log('Generator 2:', generator.next());
console.log('Generator 3:', generator.next());
console.log('Generator 4:', generator.next());
console.log('Generator 5:', generator.next());
