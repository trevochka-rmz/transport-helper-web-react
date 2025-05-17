function ServiceBlock({ service, onClick }) {
    return (
        <li>
            <div className="games">
                <img src={service.images_path} alt="" />
                <h2>{service.name}</h2>
                <button onClick={onClick}>Заказать</button>
            </div>
        </li>
    );
}
export default ServiceBlock;
