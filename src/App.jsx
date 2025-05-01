import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import Profile from "./pages/Profile.jsx";
import Catalog from "./pages/Catalog.jsx";
import { ToastContainer } from 'react-toastify';
import News from "./pages/News.jsx";
import Library from "./pages/Library.jsx";
import gamingNews from "./data/news.js";
import users from "./data/users.js";
import Login from "./pages/Login.jsx"
import { useState } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Registr from "./pages/Registr.jsx";

function App() {
    const [profile, setProfile] = useState(users[0]);
    const [isRegistr, setIsRegistr] = useState(true)

    return (
        <Router>
            <div className="app-container">
                <ToastContainer />
                <Header isRegistr={isRegistr} setIsRegistr={setIsRegistr} setUser={setProfile} user={profile} />
                <div className="content-wrapper">
                    <SideBar isRegistr={isRegistr}/>
                    <div className="maincontent">
                        <Routes>
                            <Route path="/profile" element={<Profile setUser={setProfile} user={profile} />} />
                            <Route path="/library" element={<Library />} />
                            <Route path="/news" element={<News gamingNews={gamingNews} />} />
                            <Route path="/catalog" element={<Catalog isRegistr={isRegistr} setUser={setProfile} user={profile} />} />
                            <Route path="/registr" element={<Registr isRegistr={isRegistr} setIsRegistr={setIsRegistr} profile={profile} setProfile={setProfile}/>}/>
                            <Route path="/login" element={<Login  isRegistr={isRegistr} setIsRegistr={setIsRegistr} profile={profile} setProfile={setProfile}/>}/>
                            <Route path="*" element={<Navigate to="/profile"/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;