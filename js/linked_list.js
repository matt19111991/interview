// Каждый предыдущий элемент хранит ссылку на следующий элемент в списке
// Плюс - мгновенное добавление в начало или конец списка
// Минус - для получения элемента нужно итерироваться по всему списку

// Массивы подходят для случаев, где редко меняется размер массива и
// часто происходит обращение к данным
// O(1) - получить элемент
// O(n) - добавить / удалить элемент
// O(n) - поиск элемента

// Связные списки подходят, когда обращение к данным происходит редко, а
// изменения происходят часто
// O(1) - вставка / удаление в начало / конец / знаем место, куда подставлять
// O(n) - вставка в произвольное место, если не знаем куда подставлять
// O(n) - поиск элемента

class LinkedList {
    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;

            return true;
        }

        let node = this.root;

        while (node.next) {
            node = node.next;
        }

        node.next = new Node(value);

        this.size += 1;
    }

    getSize() {
        return this.size;
    }

    print() {
        let result = [];
        let node = this.root;

        while (node) {
            result.push(node.value);

            node = node.next;
        }

        return console.log('Result', result);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();

list.add(5);
list.add(3);
list.add(7);

list.print();
