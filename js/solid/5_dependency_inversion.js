// Принцип инверсии зависимостей

// Модули верхних уровней не должны зависеть от модулей нижних уровней
// Оба типа модулей должны зависеть от абстракций
// Абстракции не должны зависеть от деталей
// Детали должны зависеть от абстракций

// ------------------- Нарушение принципа ------------------------

import axios from 'axios';

const LoginForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        axios.post('someUrl', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="email" name="email" />
            <input placeholder="password" type="password" name="password" />
            <button type="submit">Войти</button>
        </form>
    );
}

// ------------------- Корректно ------------------------

import axios from 'axios';
export const signIn = (data: FormData) => axios.post('someUrl', data);

// --------------------------------------

import { signIn } from 'services/sign-in';

const Login = () => {
    return (
        <LoginForm onSubmit={signIn} />
    );
}

// --------------------------------------

interface LoginFormProps {
    onSubmit: (data: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="email" name="email" />
            <input placeholder="password" type="password" name="password" />
            <button type="submit">Войти</button>
        </form>
    );
}


// ------------------- Корректно ------------------------

const Login = () => {
    return (
        <a>
            <ConnectedLoginForm />
            <a href="/remind-me">Напомнить пароль</a>
        </>
    );
}

// --------------------------------------

import axios from 'axios';

const ConnectedLoginForm = () => {
    const onSubmit = (data: FormData) => {
        axios.post('someUrl', data);
    };

    return (
        <LoginForm onSubmit={onSubmit} />
    );
}

// --------------------------------------

interface LoginFormProps {
    onSubmit: (data: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="email" name="email" />
            <input placeholder="password" type="password" name="password" />
            <button type="submit">Войти</button>
        </form>
    );
}
