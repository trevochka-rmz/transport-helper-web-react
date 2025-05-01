import gamelist from "../data/GameList"
import "./GameBlock.css"
function GameBlock({gamelist,onClick}){
    return(
        <li>
        <div className="games">
            <img src={gamelist.imggame} alt="" />
            <h2>
                {gamelist.game}
            </h2>
            <button onClick={onClick}>
                Открыть
            </button>
        </div>
        </li>
    )
}
export  default GameBlock