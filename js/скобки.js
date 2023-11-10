/*
* Реализовать метод для определения верна ли скобочная последовательность
* */

function parentheses(str) {
  const chars = str.split('');

  let stack = [];

  const open = ["{", "["];
  const close = ["}", "]"];

  let openIndex;
  let closeIndex;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    openIndex = open.indexOf(char);

    if (openIndex !== -1) {
      stack.push(openIndex);

      continue;
    }

    closeIndex = close.indexOf(char);

    if (closeIndex !== -1) {
      openIndex = stack.pop();

      if (openIndex !== closeIndex) {
        return false;
      }
    }
  }

  return true; // по умолчанию считаем, что последовательность скобок правильная
}

console.log('OK {{}{}} =>', parentheses('{{}{}}'));
console.log('OK {[{}]} =>', parentheses('{[{}]}'));
console.log('BAD {[{]} =>', parentheses('{[{]}'));
console.log('BAD {[}] =>', parentheses('{[}]'));
