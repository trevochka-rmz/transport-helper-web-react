import GameBlock from "./GameBlock.jsx"
import gamelist from "../data/GameList.js"
import "./GameList.css"
import Modal from "react-modal";
import {useState} from "react"
import GameModal from "../modals/GameModal.jsx"
import gamelibrary from "../data/LibraryGames.js"
import {notifySuccess,notifyError} from "../utils/notification.js"
function GameList({user,setUser, isRegistr}){
    const [isOpenModal,setIsOpenModal]=useState(false)
    const [indexGame,setIndexGame]=useState(0)
    const addToLib = () => {
        if (gamelibrary.find(game=>game.game===gamelist[indexGame].game)){
            notifyError(`${gamelist[indexGame].game} есть в вашей библиотеке`);
           
        }
        else if (user.balance >= gamelist[indexGame].price) {
            gamelibrary.push(gamelist[indexGame]);
    
            
            const updatedUser = {
                ...user, 
                balance: user.balance - gamelist[indexGame].price,
            };
    
            
            setUser(updatedUser);
    
            notifySuccess(`${gamelist[indexGame].game} был куплен, осталось ${updatedUser.balance}`);
        } else {
            notifyError(`На вашем балансе недостаточно средств, ваш баланс ${user.balance}`);
        }
    };
    return(
        <div className="divgame">
           
            <ol className="olgame">
                {gamelist.map((i)=>(
                   <GameBlock  key={i} gamelist={i} onClick={()=>{setIsOpenModal(true); setIndexGame(gamelist.indexOf(i))} }>
                   
                   </GameBlock>
                )
                
                )}
            </ol>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)} // Закрытие при клике вне окна или на Escape
                ariaHideApp={false} // Отключение предупреждения для React Modal
            >
                <GameModal isRegistr={isRegistr} game={gamelist[indexGame]} onClose={() => setIsOpenModal(false)} onClick={()=>{addToLib()}} />
            </Modal>
            </div>
        
    )
}
export default GameList