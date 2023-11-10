/*
* Реализовать функцию, которая принимает аргументы-стрОки '&', '1', 'b', '1c'
* и возвращает строку '1&b&1c'
* */

function transformStringCall() {
  // arguments [Arguments] { '0': '&', '1': '1', '2': 'b', '3': '1c' }
  // [].slice.call(arguments, 1) // взять все элементы массива, кроме 1-ого

  return [].slice.call(arguments, 1).join(arguments[0]);
}

console.log('transformString with call =', transformStringCall('&', '1', 'b', '1c'));


function transformStringRest(separator, ...args) {
  return args.join(separator);
}

console.log('transformString with rest =', transformStringRest('&', '1', 'b', '1c'));
