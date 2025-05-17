import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import CatalogProducts from './pages/CatalogProducts.jsx';
import CatalogServices from './pages/CatalogServices.jsx';
import { ToastContainer } from 'react-toastify';
import Library from './pages/Library.jsx';
import LibraryService from './pages/LibraryService.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import users from './data/users.js';
import Login from './pages/Login.jsx';
import { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Registr from './pages/Registr.jsx';

function App() {
    const [profile, setProfile] = useState(users[0]);
    const [isRegistr, setIsRegistr] = useState(true);

    return (
        <Router>
            <div className="app-container">
                <ToastContainer />
                <Header
                    isRegistr={isRegistr}
                    setIsRegistr={setIsRegistr}
                    setUser={setProfile}
                    user={profile}
                />
                <div className="content-wrapper">
                    <SideBar isRegistr={isRegistr} />
                    <div className="maincontent">
                        <Routes>
                            <Route path="/library" element={<Library />} />
                            <Route
                                path="/library-service"
                                element={<LibraryService />}
                            />
                            <Route
                                path="/catalog-products"
                                element={
                                    <CatalogProducts
                                        isRegistr={isRegistr}
                                        setUser={setProfile}
                                        user={profile}
                                    />
                                }
                            />
                            <Route
                                path="/catalog-services"
                                element={
                                    <CatalogServices
                                        isRegistr={isRegistr}
                                        setUser={setProfile}
                                        user={profile}
                                    />
                                }
                            />
                            <Route
                                path="/orders"
                                element={
                                    <OrdersPage
                                        isRegistr={isRegistr}
                                        setUser={setProfile}
                                        user={profile}
                                    />
                                }
                            />
                            <Route
                                path="/registr"
                                element={
                                    <Registr
                                        isRegistr={isRegistr}
                                        setIsRegistr={setIsRegistr}
                                        setProfile={setProfile}
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <Login
                                        isRegistr={isRegistr}
                                        setIsRegistr={setIsRegistr}
                                        setProfile={setProfile}
                                    />
                                }
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/catalog-products" />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
