import './SideBar.css';
import { NavLink } from 'react-router-dom';

function SideBar({ isRegistr }) {
    return (
        <div className="SideBar">
            {isRegistr ? (
                <section>
                    <NavLink to="/library">
                        <button className="SideBarbutton" type="button">
                            Корзина товаров
                        </button>
                    </NavLink>
                    <NavLink to="/library-service">
                        <button className="SideBarbutton" type="button">
                            Корзина услуг
                        </button>
                    </NavLink>
                    <NavLink to="/catalog-products">
                        <button className="SideBarbutton" type="button">
                            Каталог товаров
                        </button>
                    </NavLink>
                    <NavLink to="/catalog-services">
                        <button className="SideBarbutton" type="button">
                            Каталог услуг
                        </button>
                    </NavLink>
                    <NavLink to="/orders">
                        <button className="SideBarbutton" type="button">
                            Заказы
                        </button>
                    </NavLink>
                </section>
            ) : (
                <section>
                    <NavLink to="/catalog-products">
                        <button className="SideBarbutton" type="button">
                            Каталог товаров
                        </button>
                    </NavLink>
                    <NavLink to="/catalog-services">
                        <button className="SideBarbutton" type="button">
                            Каталог услуг
                        </button>
                    </NavLink>
                </section>
            )}
        </div>
    );
}

export default SideBar;
