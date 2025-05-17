import { orders, removeFromOrder } from '../data/orders.js';
import { basketServices, removeFromServices } from '../data/basketServices.js';
import { basket, removeFromBasket } from '../data/basket.js';
import OrderLibBlock from './OrderLibBlock.jsx';
import { useState, useEffect } from 'react';
import { notifySuccess, notifyError } from '../utils/notification.js';

import './Orders.css';

function OrderLibList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(orders());
    }, []);

    const handleDelete = (orderName) => {
        removeFromOrder(orderName.name);
        if (orderName.type === 'Услуга') {
            removeFromServices(orderName.name);
        } else {
            removeFromBasket(orderName.name);
        }
        setItems(orders());
        notifySuccess(`Заказ "${orderName.name}" удален`);
    };
    const handleComplete = (orderName) => {
        removeFromOrder(orderName.name);
        if (orderName.type === 'Услуга') {
            removeFromServices(orderName.name);
        } else {
            removeFromBasket(orderName.name);
        }
        setItems(orders());
        notifySuccess(`Заказ "${orderName.name}" выполнен`);
    };

    return (
        <div className="divorderlib">
            <div className="order-header">
                <p>Пассажир №</p>
                <p>Тип</p>
                <p>Название</p>
                <p>Цена</p>
                <p>Количество</p>
            </div>

            <ol className="olorderlib">
                {items.map((order, index) => (
                    <OrderLibBlock
                        key={index}
                        orderUser={order}
                        onDelete={handleDelete}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </div>
    );
}
export default OrderLibList;
