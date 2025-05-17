import './ProductBlock.css';
function ProductBlock({ product, onClick }) {
    return (
        <li>
            <div className="games">
                <img src={product.images_path} alt="" />
                <h2>{product.name}</h2>
                <button onClick={onClick}>Заказать</button>
            </div>
        </li>
    );
}
export default ProductBlock;
