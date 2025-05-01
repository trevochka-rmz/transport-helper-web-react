import "./GameModal.css"
function GameModal({ game, onClose, onClick, isRegistr }) {
    return (
        <div className="ModalDiv">
            
            <button className="close-button" onClick={onClose}>
                &times; 
            </button>

            
            <img src={game.imggame} alt={game.game} className="modal-image" />

           
            <h2 className="modal-title">{game.game}</h2>

            
            <p className="modal-description">{game.description}</p>

           
            <p className="modal-price">Цена: {game.price} ₽</p>
            {(isRegistr===true)
            ?
            <button onClick={onClick} className="buy-button">{game.button}</button>
            :
            null
            }
           
        </div>
    );
}

export default GameModal;