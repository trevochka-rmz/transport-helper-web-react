import './ServiceModal.css';
function ServiceModal({ service, onClose, onClick, isRegistr }) {
    return (
        <div className="ModalDiv">
            <button className="close-button" onClick={onClose}>
                &times;
            </button>

            <img
                src={service.images_path}
                alt={service.name}
                className="modal-image"
            />

            <h2 className="modal-title">{service.name}</h2>

            <p className="modal-description">{service.description}</p>

            <p className="modal-price">Цена: {service.price} ₽</p>
            {isRegistr === true ? (
                <button onClick={onClick} className="buy-button">
                    Заказать
                </button>
            ) : null}
        </div>
    );
}

export default ServiceModal;
