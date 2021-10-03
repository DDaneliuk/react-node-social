import React from 'react';
import './NavBar.css'
import logo from "./logo.svg";

const NavBar = () => {
    return(
        <header className="App-header">
            <div className="app-logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Social Club</h1>
            </div>
            <nav className="app-nav">
                <ul>
                    <li><a href="/#">Feed</a></li>
                    <li><a href="/#">Login</a></li>
                    <li><a href="/#">Sign up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar