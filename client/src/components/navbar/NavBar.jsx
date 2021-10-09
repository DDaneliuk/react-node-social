import React from 'react';
import style from './NavBar.module.scss'
import logo from "./logo.svg";

const NavBar = () => {
    return(
        <header className={style.header}>
            <div className={style.flexLogo}>
                <img src={logo} className={style.logo} alt="logo" />
                <h1>React Social Club</h1>
            </div>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.listItem}><a href="/#">Feed</a></li>
                    <li className={style.listItem}><a href="/#">Login</a></li>
                    <li className={`${style.listItem} ${style.primaryBtn}`}><a href="/#">Sign up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar