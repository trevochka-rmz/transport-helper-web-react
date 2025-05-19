import { useState, useEffect } from 'react';
import { basket, removeFromBasket, clearBasket } from '../data/basket.js';
import { orders, removeFromOrder, clearOrders } from '../data/orders.js';
import ProductLibBlock from './ProductLibBlock.jsx';
import { notifySuccess, notifyError } from '../utils/notification.js';
import './ProductLibList.css';

function ProductLibList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(basket());
    }, []);

    const handleDelete = (productName) => {
        removeFromBasket(productName);
        removeFromOrder(productName);
        setItems(basket());
        notifySuccess(`${productName} был успешно удален`);
    };

    const handleCheckout = () => {
        if (items.length === 0) {
            notifyError('Корзина пуста');
            return;
        }

        clearBasket();
        clearOrders();
        setItems([]);
        notifySuccess('Заказ успешно оформлен! Корзина очищена');
    };

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.count,
        0
    );

    return (
        <div className="divgamelib">
            <h1 className="library-title">Корзина товаров</h1>
            <ol className="olgamelib">
                {items.map((item) => (
                    <ProductLibBlock
                        key={`${item.name}-${Date.now()}`}
                        product={item}
                        onDelete={handleDelete}
                    />
                ))}
            </ol>
            <div className="checkout-section">
                <div className="total-price">Итого: {totalPrice} ₽</div>
                <button
                    className="checkout-button"
                    onClick={handleCheckout}
                    disabled={items.length === 0}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    );
}

export default ProductLibList;
