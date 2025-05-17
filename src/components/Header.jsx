import './Header.css';
import BillBalanceModal from '../modals/BillBalanceModal.jsx';
import Modal from 'react-modal';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ setUser, user, isRegistr, setIsRegistr }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className="header">
            <div className="div1">
                <img
                    className="logo"
                    src="https://i.pinimg.com/736x/05/4c/b1/054cb148f9a8ef419b55166e0ce4dd64.jpg"
                    alt=""
                />
                <h1>Транспортный помощник</h1>
            </div>
            {isRegistr === true ? (
                <div className="div2">
                    <div className="user-info">
                        <p className="username">{user.username}</p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <p className="balance">Баланс: {user.balance}</p>
                            <button
                                className="Buttonplus"
                                onClick={() => {
                                    setIsOpenModal(true);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsRegistr(false);
                        }}
                    >
                        выйти
                    </button>
                    <Modal
                        isOpen={isOpenModal}
                        onRequestClose={() => setIsOpenModal(false)}
                        ariaHideApp={false}
                    >
                        <BillBalanceModal
                            user={user}
                            setUser={setUser}
                            onClose={() => setIsOpenModal(false)}
                        ></BillBalanceModal>
                    </Modal>
                </div>
            ) : (
                <div className="div2">
                    <NavLink to="/registr">
                        <button className="registrButton" type="button">
                            Регистрация
                        </button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="LoginButton" type="button">
                            Войти
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Header;
