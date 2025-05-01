import gamelibrary from "../data/LibraryGames.js"
import GameLibBlock from "./GameLibBlock"
function GameLibList(){
    return(
        <div className="divgamelib">
            <ol className="olgamelib">
                {gamelibrary.map((i)=>(
                   <GameLibBlock  key={i} gameblock={i}>
                   
                   </GameLibBlock>
                )
                
                )}
            </ol>
            </div>
    )
}
export default GameLibList