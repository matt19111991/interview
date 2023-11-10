/*
* Есть массив в котором лежат объекты с датами, отсортировать по датам по возрастанию.
* */

const dates = [{ date: '05.11.2016' }, { date: '10.01.2017' }, { date: '21.08.2002' }];

function sort(array) {
    return array.sort((a, b) => {
        const [aDay, aMonth, aYear] = a.date.split('.');
        const [bDay, bMonth, bYear] = b.date.split('.');

        const aDate = new Date(+aYear, +aMonth, +aDay); // 2016-12-04T21:00:00.000Z
        const bDate = new Date(+bYear, +bMonth, +bDay); // 2002-09-20T21:00:00.000Z

        return aDate.getTime() - bDate.getTime(); //  Number 1480885200000 - Number 1032555600000
    })
}

console.log('sort dates =>', sort(dates));
