import './ProductLibBlock.css';

function ProductLibBlock({ product, onDelete }) {
    return (
        <li>
            <div className="Libgames">
                <img src={product.images_path} alt={product.name} />
                <h2>{product.name}</h2>
                <p>× {product.count}</p>
                <p>{product.price * product.count} ₽</p>
                <button
                    className="delete-button"
                    onClick={() => onDelete(product.name)}
                >
                    Удалить
                </button>
            </div>
        </li>
    );
}

export default ProductLibBlock;
