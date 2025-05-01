
import gamelist from "../data/GameList.js"
import GameList from "../components/GameList.jsx"
import user from "../data/users.js"
function Catalog({user,setUser, isRegistr }){
    return(
        <div>
            <GameList isRegistr={isRegistr} setUser={setUser} user={user}></GameList>
        </div>
    )
}
export default Catalog