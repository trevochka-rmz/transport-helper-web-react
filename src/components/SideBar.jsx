import "./SideBar.css"
import { NavLink } from 'react-router-dom';

function SideBar({isRegistr}){
    return(
        <div className="SideBar">
            {isRegistr ? (
                <section>
                    <NavLink to="/profile"><button className="SideBarbutton" type="button">Профиль</button></NavLink>
                    <NavLink to="/library"><button className="SideBarbutton" type="button">Библиотека</button></NavLink>
                    <NavLink to="/news"><button className="SideBarbutton" type="button">Новости</button></NavLink>
                    <NavLink to="/catalog"><button className="SideBarbutton" type="button">Каталог</button></NavLink>
                </section>
            ) : (
                <section>
                    <NavLink to="/news"><button className="SideBarbutton" type="button">Новости</button></NavLink>
                    <NavLink to="/catalog"><button className="SideBarbutton" type="button">Каталог</button></NavLink>
                </section>
            )}
        </div>
    )
}

export default SideBar