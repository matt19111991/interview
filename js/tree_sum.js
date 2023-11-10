/*
* Дано дерево. Найти сумму всех вершин
* */

const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null,
    },
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null,
        },
        {
          valueNode: 5,
          next: null,
        }
      ]
    }]
};

function getSumQueue(obj) { // через очередь
  const arr = [obj];

  let sumQue = 0;
  let current;

  while(arr.length > 0) {
    current = arr.shift();

    sumQue += current.valueNode;

    if (current.next !== null) {
      for (let i = 0; i < current.next.length; i++) {
        arr.push(current.next[i]);
      }
    }
  }

  return sumQue;
}


console.log('tree sum через очередь =', getSumQueue(tree));

// --------------------------------------------------------

let sumRec = 0;

function getSumRecursion(obj) { // через рекурсию
  sumRec += obj.valueNode;

  if (obj.next !== null) {
    for (let i = 0; i < obj.next.length; i++) {
      getSumRecursion(obj.next[i]);
    }
  }

  return sumRec;
}

console.log('tree sum через рекурсию =', getSumRecursion(tree));
