// Для AJAX нужно, чтобы совпадали протокол, домен и порт
// JSONP - лайфхак для кросдоменных запросов
// Теги с атрибутом src способы посылать только GET запросы; JSONP не поддерживает POST

// Тег script начинает выкачивать скрипт, лежащий по адресу в атрибуте src
// После закачки, происходит выполнение скрипта
// Случайным образом генерируем имя функции
// Формируем урл к ресурсу, где в качестве параметра передается имя нашей новой функции
// В глобальную область по ключу callbackName помещается функция,
// которая вызовется при получение данных от ресурса, они станут доступны внутри через параметр
// <script src='http://mydomen.com/news.php?callback0.90428777...'>

const url = 'http://mydomen.com/news.php';
const script = document.createElement('script');
const callbackName = 'jsonCallback' + Math.random();

script.src = url + '?callback' + callbackName;

window[callbackName] = function(response) {
    console.log(response);
}

// window.jsonCallback0.90428777 -> function (response) {
//    console.log(response);
// }

document.header.appendChild(script);
