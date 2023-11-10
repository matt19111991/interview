// Принцип разделения интерфейсов

// Интерфейсы не должны зависеть от методов, которые они не используют
// Много специфических интерфейсов лучше чем один универсальный
// Изменение родительского компонента или структуры данных не должно влиять на дочерние компонеты

// ------------------- Нарушение принципа ------------------------

const user = {
    name: 'john',
    age: 23,
    job: 'accountant'
}

const anotherUser = {
    personalInfo: {
        name: 'john',
        age: 23,
        job: 'accountant'
    }
}

// anotherUser не будет работать. Зависимость от внешних условий
const DisplayUser1 = (props) => {
    return (
        <div>
            <h1>Hello, ${props.user.name}</h1>
            {/* <h1>Hello, ${props.anotherUser.personalInfo.name}</h1 */}
        </div>
    );
}

// ------------------- Корректно ------------------------

const DisplayUser2 = ({ name }) => {
    return (
        <div>
            <h1>Hello, ${name}</h1>
        </div>
    );
}
