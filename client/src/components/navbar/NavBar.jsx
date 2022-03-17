import React from 'react';
import style from './NavBar.module.scss'
import logo from "./logo.svg";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <header className={style.header}>
            <div className={style.flexLogo}>
                <img src={logo} className={style.logo} alt="logo" />
                <h1>React Social Club</h1>
            </div>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.navItem}><Link to="/">Profile</Link></li>
                    <li className={style.navItem}><Link to="/message">Message</Link></li>
                    <li className={style.navItem}><Link to="/feed">Feed</Link></li>
                    <li className={style.navItem}><Link to="/login">Login</Link></li>
                    <li className={`${style.navItem} ${style.primaryBtn}`}><Link to="/signup">Sign up</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
