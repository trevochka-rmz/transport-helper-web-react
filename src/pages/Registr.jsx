import "./Registr.css"
import { useState } from "react";
import {notifySuccess, notifyError} from "../utils/notification.js"
import users from "../data/users.js"
function Registr({isRegistr, setIsRegistr, profile, setProfile}){
    const [user, setUser] = useState({
            username: "",
            mail: "",
            avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Ftemplate%2F11148461&psig=AOvVaw14AQoGLLXIvzb8YnNH2C8V&ust=1740544334846000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDZ2-_-3YsDFQAAAAAdAAAAABAE",
            favoritegame: "Cyberpunk 2077",
            imgfavoritegame: "https://vkplay.ru/hotbox/content_files/news/2019/09/09/dfa0aa25bb3e4142b16cd892bd96a9da.jpg",
            gender: "",
            dateregister: "",
            descriptiongame: "Футуристическая RPG, действие которой происходит в Найт-Сити. Вы играете за V, наемника, который выживает в мире высоких технологий и низкой морали.",
            balance: 10000,
            password: "",

        })
        const handleChange = (e) => {
            const {name, value} = e.target
            setUser(prev => ({
                ...prev,
                [name]: value
            }))
        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if (user.username === "" || user.mail === "" || user.password === "" || user.gender === ""){
                notifyError("Все поля ввода должны быть заполнены!")
                return;
            }
            if (user.password.length < 8){
                notifyError("Пароль должен содержать больше 8 символов!")
                return;
            }
            if (user.gender !== "мужской" && user.gender !== "женский" && user.gender !== "Мужской" && user.gender !== "Женский"){
                notifyError("Гендер должен быть либо мужским, либо женским")
                return;
            }
            let offandon=0
            for (let i = 0; i < users.length; i++){
                if (users[i].username === user.username || users[i].mail === user.mail){
                    offandon = 1
                }
            }
            if (offandon === 1){
                notifyError("Такая почта или логин уже существует")
                return
            }
            const newUser = {
                ...user,
                dateregister: new Date().toISOString().split('T')[0],
                balance: 10000, 
                avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Ftemplate%2F11148461&psig=AOvVaw14AQoGLLXIvzb8YnNH2C8V&ust=1740544334846000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDZ2-_-3YsDFQAAAAAdAAAAABAE",
                favoritegame: "Cyberpunk 2077",
                imgfavoritegame: "https://vkplay.ru/hotbox/content_files/news/2019/09/09/dfa0aa25bb3e4142b16cd892bd96a9da.jpg",
                descriptiongame: "Футуристическая RPG, действие которой происходит в Найт-Сити. Вы играете за V, наемника, который выживает в мире высоких технологий и низкой морали."
            };
            
            users.push(newUser);
            
            setProfile(newUser);
            
            setIsRegistr(true);
            
            notifySuccess("Регистрация прошла успешно! Добро пожаловать!");
            
        };
    
    return(
        <div className="RegistrDiv">
            <h1 className="Registrh1">Регистрация</h1>
             <form onSubmit={handleSubmit} className="RegistrForm">
                <div>
                    <label htmlFor="username">Логин:</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username" 
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Введите логин"
                    />
                </div>
                 <div>
                    <label htmlFor="mail">Электронная Почта:</label>
                    <input 
                        type="email" 
                        id="mail"
                        name="mail"
                        value={user.mail}
                        onChange={handleChange}
                        placeholder="Введите почту"
                    />
                </div>
                <div>
                    <label htmlFor="gender">Пол:</label>
                    <input 
                        type="text" 
                        id="gender"
                        name="gender"
                        value={user.gender}
                        onChange={handleChange} 
                        placeholder="Мужской/Женский"
                    />
                </div> 
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Введите пароль" />
                </div>
               
                
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}
export default Registr