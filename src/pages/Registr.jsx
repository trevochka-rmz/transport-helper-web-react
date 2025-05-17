import { useState } from 'react';
import { notifySuccess, notifyError } from '../utils/notification.js';
import users from '../data/users.js';
import './Registr.css';

function Registr({ setIsRegistr, setProfile }) {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.username || !user.password) {
            notifyError('Все поля должны быть заполнены!');
            return;
        }

        if (user.password.length < 6) {
            notifyError('Пароль должен содержать минимум 6 символов');
            return;
        }

        const usernameExists = users.some((u) => u.username === user.username);
        if (usernameExists) {
            notifyError('Пользователь с таким именем уже существует');
            return;
        }

        const newUser = {
            username: user.username,
            password: user.password,
            balance: 0,
            role: 'пассажир',
            number_passenger: users.length + 1,
        };

        users.push(newUser);
        setProfile(newUser);
        setIsRegistr(true);

        notifySuccess('Регистрация прошла успешно!');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Регистрация</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="username">Имя пользователя</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
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
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Введите пароль"
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registr;
