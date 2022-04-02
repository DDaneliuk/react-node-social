import React from 'react'
// style
import style from '../login-page/LoginPage.module.scss'

const SignPage = (props) => {
    const onEmailInput = (e) => {
        props.setUserEmail(e.target.value)
    }
    const onUsernameInput = (e) => {
        props.setUserUsername(e.target.value)
    }
    const onUserPass = (e) => {
        props.setUserPassword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        props.onSignUp()
    }
    return (
        <div className='pageLayout'>
            <div className={style.wrapper}>
                <h1>Sign up</h1>
                <div className={style.formWrapper}>
                    <form>
                        <label>Email</label>
                        <input onChange={e => onEmailInput(e)} type="email" placeholder="Email"/>
                        <label>Username</label>
                        <input onChange={e => onUsernameInput(e)} type="text" placeholder="Username"/>
                        <label>Password</label>
                        <input onChange={e => onUserPass(e)} type="password" placeholder="Password"/>
                        <button onClick={onSubmit} type="submit" className={`primaryBtn ${style.loginBtn}`}>Get
                            started
                        </button>
                        {props.serverMessage ? <p>{props.serverMessage}</p> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignPage
