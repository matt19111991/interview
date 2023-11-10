// Принцип единой ответственности

// Для каждого класса / функции / компонента должно быть определено
// единственное значение

// ------------------- Нарушение принципа ------------------------

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get('https://someapi/todos/');
            setTodos(data);
        }

        getTodos();
    }, []);

    return (
        <div>
            <h1>My Todos:</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {`ID:${todo.id}, Title: ${todo.title}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ------------------- Корректно ------------------------

async function getTodos() {
    const { data } = await axios.get('https://someapi/todos/');

    return data;
}

function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(data => setTodos(data));
    }, []);

    return todos;
}

const TodoItem = ({ id, title }) => (
    <li key={id}>{`ID:${id}, Title: ${title}`}</li>
);

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => <TodoItem key={todo.id} title={todo.title} />)}
    </ul>
);

const TodosPage = () => {
    const todos = useTodos([]);

    return (
        <div>
            <h1>My Todos:</h1>
            <TodoList todos={todos} />
        </div>
    );
}
