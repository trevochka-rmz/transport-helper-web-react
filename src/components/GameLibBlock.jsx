import "./GameLibBlock.css"
function GameLibBlock({gameblock}){
    return(
        <li>
        <div className="Libgames">
            <img src={gameblock.imggame} alt="" />
            <h2>
                {gameblock.game}
            </h2>
        </div>
        </li>
    )

}
export default GameLibBlock