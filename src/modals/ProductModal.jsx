function ProductModal({ product, onClose, onClick, isRegistr }) {
    return (
        <div className="ModalDiv">
            <button className="close-button" onClick={onClose}>
                &times;
            </button>

            <img
                src={product.images_path}
                alt={product.name}
                className="modal-image"
            />

            <h2 className="modal-title">{product.name}</h2>

            <p className="modal-description">{product.description}</p>

            <p className="modal-price">Цена: {product.price} ₽</p>
            {isRegistr === true ? (
                <button onClick={onClick} className="buy-button">
                    Купить
                </button>
            ) : null}
        </div>
    );
}

export default ProductModal;
