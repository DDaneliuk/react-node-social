import React from 'react'
import {connect} from "react-redux";
import SignPage from "./SignPage";
import {setServerMess, setUserEmail, setUserPassword, setUserUsername, signUpUser} from "../../redux/reducers/signup";
import axios from "axios";

class SignContainer extends React.Component {
    onSignUp = () => {
        if (!this.props.email || !this.props.username || !this.props.password) {
            this.props.setServerMess("Fill all fields before signing up")
        } else {
            axios.post(`http://localhost:3001/signup`, {
                email: this.props.email,
                username: this.props.username,
                password: this.props.password
            }).then(res => {
                this.props.setServerMess(res.data.message)
            })
        }
    }

    render() {
        return (<SignPage email={this.props.email}
                          username={this.props.username}
                          password={this.props.password}
                          serverMessage={this.props.serverMessage}
                          onSignUp={this.onSignUp}
                          setUserEmail={this.props.setUserEmail}
                          setUserUsername={this.props.setUserUsername}
                          setUserPassword={this.props.setUserPassword}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.signupPage.email,
        username: state.signupPage.username,
        password: state.signupPage.password,
        serverMessage: state.signupPage.serverMessage
    }
}

export default connect(mapStateToProps, {
    signUpUser,
    setUserEmail, setUserUsername, setUserPassword, setServerMess
})(SignContainer)
