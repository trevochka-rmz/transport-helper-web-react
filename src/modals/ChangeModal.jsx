import "./ChangeModal.css";
import { useState } from "react";

function ChangeModal({ profile, onClose2, onSubmit, setProfile }) {
    const [formData, setFormData] = useState({
        username: profile.username || "",
        dateregister: profile.dateregister || "",
        mail: profile.mail || "",
        gender: profile.gender || ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setProfile(prev => ({ ...prev, ...formData }));
        onClose2();
    };

    return (
        <div className="Divchangemodal">
            <button className="close-button" onClick={onClose2}>
                &times;
            </button>

            <h2 style={{ color: "#2e8b57", marginBottom: "20px", textAlign: "center" }}>
                Редактирование профиля
            </h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Логин:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Введите новый логин"
                    />
                </div>
                <div>
                    <label htmlFor="dateregister">Дата Регистрации:</label>
                    <input 
                        type="text" 
                        id="dateregister" 
                        value={formData.dateregister}
                        onChange={handleChange}
                        placeholder="DD.MM.YYYY"
                    />
                </div>
                <div>
                    <label htmlFor="mail">Электронная Почта:</label>
                    <input 
                        type="email" 
                        id="mail" 
                        value={formData.mail}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                    />
                </div>
                <div>
                    <label htmlFor="gender">Пол:</label>
                    <input 
                        type="text" 
                        id="gender" 
                        value={formData.gender}
                        onChange={handleChange}
                        placeholder="Мужской/Женский"
                    />
                </div>
                <button type="submit">Сохранить изменения</button>
            </form>
        </div>
    )
}

export default ChangeModal;


