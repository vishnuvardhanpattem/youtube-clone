import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
// import { Menu as MenuIcon } from "@material-ui/icons";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
                        alt="youtube" /></Link>
            </div>
            <div className="header__input" >
                <input 
                onChange={(e) => setInputSearch(e.target.value)} 
                value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__icon" />
            </div>


        </div>
    )
}

export default Header;