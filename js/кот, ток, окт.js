/*
* Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт').
* */

function sortLettersAsc(word) { // сортировка букв в слове по возрастанию
  return word.split('').sort((a, b) => a.localeCompare(b)).join('');
}

function sameLettersCheck(...strings) {
  if (strings.length > 1) {
    const differentStringsLength = strings.some(string => string.length !== strings[0].length);

    if (differentStringsLength) {
      return false;
    }

    const sanitizedStrings = strings.map(string => string.trim().toLowerCase());

    const firstComparingWord = sortLettersAsc(sanitizedStrings[0]);

    return sanitizedStrings.every(string => sortLettersAsc(string) === firstComparingWord);
  }

  return false;
}

console.log('OK 1 =>',  sameLettersCheck('кот', 'ток', 'окт'));
console.log('OK 2 =>',  sameLettersCheck('сам', 'мас', 'асм'));
console.log('OK 3 =>',  sameLettersCheck('САм', 'мАс', 'асм'));
console.log('BAD 4 =>', sameLettersCheck('рост', 'смотр', 'кросс'))
