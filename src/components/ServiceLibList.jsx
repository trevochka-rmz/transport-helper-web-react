import { useState, useEffect } from 'react';
import { basketServices, removeFromServices } from '../data/basketServices.js';
import { orders, removeFromOrder } from '../data/orders.js';
import ServiceLibBlock from './ServiceLibBlock.jsx';
import { notifySuccess, notifyError } from '../utils/notification.js';
function ServiceLibList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(basketServices());
    }, []);

    const handleDelete = (serviceName) => {
        removeFromServices(serviceName);
        removeFromOrder(serviceName);
        setItems(basketServices());
        notifySuccess(`${serviceName} был успешно удален`);
    };

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.count,
        0
    );

    return (
        <div className="divgamelib">
            <h1 className="library-title">Корзина услуг</h1>
            <ol className="olgamelib">
                {items.map((item) => (
                    <ServiceLibBlock
                        key={`${item.name}-${Date.now()}`}
                        service={item}
                        onDelete={handleDelete}
                    />
                ))}
            </ol>
            <div className="total-price">Итого: {totalPrice} ₽</div>
        </div>
    );
}

export default ServiceLibList;
