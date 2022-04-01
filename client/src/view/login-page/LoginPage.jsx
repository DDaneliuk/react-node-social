import React from 'react'
// style
import style from './LoginPage.module.scss'

const LoginPage = (props) => {
    const onUsernameChange = (e) => {
        props.setLoginUserUsername(e.target.value)
    }
    const onUserPassChange = (e) => {
        props.setLoginUserPassword(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        props.onLoginSubmit()
    }
    return (
        <div className='pageLayout'>
            <h1>Login</h1>
            <div className={style.formWrapper}>
                <form>
                    <label>Email or username</label>
                    <input onChange={onUsernameChange} type="text" placeholder="Username"/>
                    <label>Password</label>
                    <input onChange={onUserPassChange} type="password" placeholder="Password"/>
                    <button onClick={onFormSubmit} type="submit" className={`primaryBtn ${style.loginBtn}`}>Log in
                    </button>
                    {props.serverMessage ? <p>{props.serverMessage}</p> : null}
                </form>
            </div>
        </div>
    )
}

export default LoginPage
