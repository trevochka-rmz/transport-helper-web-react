import { useState } from 'react';
import { notifySuccess, notifyError } from '../utils/notification.js';
import users from '../data/users.js';
import './Login.css';

function Login({ setProfile, setIsRegistr }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!credentials.username || !credentials.password) {
            notifyError('Все поля должны быть заполнены!');
            return;
        }
        console.log(credentials);
        const user = users.find(
            (u) =>
                u.username === credentials.username &&
                u.password === credentials.password
        );

        if (user) {
            setProfile(user);
            setIsRegistr(true);
            notifySuccess(`Добро пожаловать, ${user.username}!`);
        } else {
            notifyError('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Вход в систему</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="username">Имя пользователя</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder="Введите имя"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Введите пароль"
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
