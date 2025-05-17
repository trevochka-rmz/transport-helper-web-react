function OrderLibBlock({ orderUser, onDelete, onComplete }) {
    return (
        <li>
            <div className="orderblock">
                <p data-label="Пассажир №">{orderUser.number_passenger}</p>
                <p data-label="Тип">{orderUser.type}</p>
                <p data-label="Название">{orderUser.name}</p>
                <p data-label="Цена">{orderUser.price} ₽</p>
                <p data-label="Количество">{orderUser.count}</p>
                <div className="orderUser-actions">
                    <button
                        className="delete-orderUser-btn"
                        onClick={() =>
                            onDelete({
                                number_passenger: orderUser.number_passenger,
                                name: orderUser.name,
                                type: orderUser.type,
                            })
                        }
                    >
                        Удалить
                    </button>
                    <button
                        className="complete-orderUser-btn"
                        onClick={() =>
                            onComplete({
                                number_passenger: orderUser.number_passenger,
                                name: orderUser.name,
                                type: orderUser.type,
                            })
                        }
                    >
                        Выполнить
                    </button>
                </div>
            </div>
        </li>
    );
}
export default OrderLibBlock;
