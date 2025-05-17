function ServiceLibBlock({ service, onDelete }) {
    return (
        <li>
            <div className="Libgames">
                <img src={service.images_path} alt={service.name} />
                <h2>{service.name}</h2>
                <p>× {service.count}</p>
                <p>{service.price * service.count} ₽</p>
                <button
                    className="delete-button"
                    onClick={() => onDelete(service.name)}
                >
                    Удалить
                </button>
            </div>
        </li>
    );
}

export default ServiceLibBlock;
