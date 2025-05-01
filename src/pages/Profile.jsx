import "./Profile.css";
import Modal from "react-modal";
import {notifySuccess, notifyError} from "../utils/notification.js"
import {useState} from "react"
import ChangeModal from "../modals/ChangeModal.jsx";

function Profile({user, setUser}) {
    const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
    
    const handleSubmit = (formData) => {
        setUser(prev => ({
            ...prev,
            ...formData
        }));
        notifySuccess("Данные успешно обновлены!");
    };

    return (
        <div className="mainDivProfile">
            <div className="topSection">
                <div className="divProfile">
                    <img src="https://sh-ekodole-ivanovka-r56.gosweb.gosuslugi.ru/netcat_files/9/67/1674320044_catherineasquithgallery_com_p_serii_fon_tik_tok_foto_70_10.jpg" alt="Profile" />
                    <h2>{user.username}</h2>
                </div>
                <div className="divrightProfile">
                    <h1>Описание</h1>
                    <button onClick={() => setIsOpenChangeModal(true)} className="Changeprofile">
                        Изменить данные
                    </button>
                    <p>Дата регистрации: {user.dateregister}</p>
                    <p>Электронная почта: {user.mail}</p>
                    <p>Пол: {user.gender}</p>
                </div>
            </div>
            <div className="bottomDiv">
                <img src={user.imgfavoritegame} alt="Game" />
                <h1>{user.favoritegame}</h1>
                <p>
                   {user.descriptiongame}
                </p>
            </div>
            <Modal 
                isOpen={isOpenChangeModal}
                onRequestClose={() => setIsOpenChangeModal(false)}
                ariaHideApp={false}
            >
                <ChangeModal 
                    profile={user} 
                    onClose2={() => setIsOpenChangeModal(false)} 
                    onSubmit={handleSubmit}
                    setProfile={setUser}
                />
            </Modal>
        </div>
    );
}

export default Profile;