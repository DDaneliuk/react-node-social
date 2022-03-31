import React from 'react'
// style
import style from './LoginPage.module.scss'
const LoginPage = () => {
    return (
        <div className='pageLayout'>
            <h1>Login</h1>
            <div className={style.formWrapper}>
                <form>
                    <label>Email or username</label>
                    <input type="text" placeholder="Email or username"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                    <button type="submit" className={`primaryBtn ${style.loginBtn}`}>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
