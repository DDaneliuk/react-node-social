import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {setLoginServerMess, setLoginUserPassword, setLoginUserUsername} from "../../redux/reducers/login";
import axios from "axios";

class LoginContainer extends React.Component {
    onLoginSubmit = () => {
        axios.post(`http://localhost:3001/auth/login`, {
            username: this.props.username,
            password: this.props.password
        }).then(res => {
            this.props.setLoginServerMess(res.data.message)
            localStorage.setItem("token", res.data.token)
        })
    }

    render() {
        return (<LoginPage
            username={this.props.username}
            password={this.props.password}
            serverMessage={this.props.serverMessage}
            setLoginUserUsername={this.props.setLoginUserUsername}
            setLoginUserPassword={this.props.setLoginUserPassword}
            setLoginServerMess={this.props.setLoginServerMess}
            onLoginSubmit={this.onLoginSubmit}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.loginPage.username,
        password: state.loginPage.password,
        serverMessage: state.loginPage.serverMessage
    }
}

export default connect(mapStateToProps, {
    setLoginServerMess,
    setLoginUserUsername,
    setLoginUserPassword,
})(LoginContainer)
