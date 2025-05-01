import "./Login.css"
import { useState } from "react";
import {notifySuccess, notifyError} from "../utils/notification.js"
import users from "../data/users.js"

function Login({profile, setProfile, isRegistr, setIsRegistr}){
    const [user, setUser] = useState({
        login: "",
        password: "",
        password2: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        if (user.password2 !== user.password){
            notifyError("Пароли не совпадают!");
            return
        }
        // Здесь можно добавить логику проверки пользователя
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.login && users[i].password === user.password) {
                setProfile(users[i]);
                setIsRegistr(true);
                notifySuccess("Вы успешно вошли в аккаунт");
                return;
            }
        }
        notifyError("Логин или пароль не верный");
    };

    return (
        <div className="LoginDiv">
            <h1 className="Loginh1">Вход</h1>
            <form onSubmit={handleSubmit} className="LoginForm">
                <div>
                    <label htmlFor="username">Логин:</label>
                    <input 
                        type="text" 
                        id="username"
                        name="login"  // Добавлен атрибут name
                        value={user.login}
                        onChange={handleChange}
                        placeholder="Введите логин"
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"  // Добавлен атрибут name
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Введите пароль" 
                    />
                </div>
                <div>
                    <label htmlFor="password2">Пароль повторно:</label>
                    <input 
                        type="password"
                        id="password2"
                        name="password2"  // Добавлен атрибут name
                        value={user.password2}
                        onChange={handleChange}
                        placeholder="Введите пароль повторно" 
                    />
                </div>
                
                <button type="submit">Вход</button>
            </form>
        </div>
    )
}

export default Login