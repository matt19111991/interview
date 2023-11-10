function Book(name, author) {
    this.name = name;
    this.author = author;

    return this;
}

function Foo(Class, name, author) {
    return Object.create(Class.prototype, {
        name: { value: name },
        author: { value: author }
    });

    // return Class.call({}, name, author);
}

const book = Foo(Book, 'Учебник javascript', 'Петр Сергеев');

console.log(book.name);
