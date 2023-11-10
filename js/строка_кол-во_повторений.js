/*
* Необходимо реализовать функцию, принимающую в аргументах строку,
* состоящую из букв и вернуть новую строку,
* в которой повторяющиеся буквы заменены количеством повторений
*
* rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
* */

function rle(str) {
  const result = [str[0]];

  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;

      if (i === str.length - 1) {
        result.push(str[i]);

        if (count > 1) {
          result.push(count);
        }
      }
    } else {
      if (i > 1) {
        result.push(str[i - 1]);
      }

      if (i === str.length - 1) {
        result.push(str[i]);
      }

      if (count > 1) {
        result.push(count);
      }

      count = 1;
    }
  }

  return result.join('');
}


console.log('Result =>', rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
