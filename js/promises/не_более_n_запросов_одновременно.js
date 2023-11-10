/*
* Дан массив urls
* Нужно написать функцию makeRequests, у которой
* 1-ым аргументом будет список urls,
* 2-ым аргументом - количество одновременных запросов
* */

// Например, если count = 2, то пока не выполняются первые два запроса, следующие два не запускаются

// URLs должны быть уникальными

function fetch (url) { // имитация fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ json: () => `ID:${url.split('/').at(-1)}`});
        }, 1500);
    })
}

async function makeRequests(urls, count) {
    const result = []; // urls - не уникальные

    const uniqueUrls = [...new Set(urls)]; // уникальные

    const timesToIterate = uniqueUrls.length > count
        ? Math.ceil(uniqueUrls.length / count)
        : 1;

    console.log('timesToIterate', timesToIterate);

    for (let i = 1; i <= timesToIterate; i++) {
        const urlsToLaunch = uniqueUrls.slice(0, count); // взять первые ${count} урлов

        const promises = urlsToLaunch.map(url => fetch(url).then(res => res.json()));

        const responses = await Promise.allSettled(promises);
        console.log('responses', responses);

        const fulfilledValues = responses
            .filter(response => response.status === 'fulfilled')
            .map(response => response.value);

        result.push(...fulfilledValues);

        uniqueUrls.splice(0, count); // отрезаем от начала массива обработанные урлы
    }

    return result;
}

makeRequests([
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/10',
  'https://jsonplaceholder.typicode.com/todos/10',
  'https://jsonplaceholder.typicode.com/todos/18'
], 2).then(response => {
  console.log('result', response);
});
