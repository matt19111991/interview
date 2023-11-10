/*
* Написать функцию, которая проверяет является ли слово палиндромом
* Палиндром - слово, которое читается одинаково слева направо и справа налево (летел)
* */

function isPalindromWord(word) {
    return word.split('').reverse().join('') === word;
}

function isPalindromString(rawString) {
    const string = rawString.toLowerCase();

    const limit = string.length;

    let start = 0;
    let end = string.length - 1;

    while (start < limit) {
        if (/[^а-яА-ЯёЁ]/.test(string[start])) {
            start += 1;
        }

        if (/[^а-яА-ЯёЁ]/.test(string[end])) {
            end -= 1;
        }

        if (string[start] !== string[end]) {
            return false;
        }

        start += 1;
        end -= 1;
    }

    return true;
}

console.log('слово OK =>', isPalindromWord('летел'));
console.log('слово BAD =>', isPalindromWord('сок'));

console.log('строка OK =>', isPalindromString('А роза упала на лапу Азора'));
console.log('строка BAD =>', isPalindromString('А роза упала'));
