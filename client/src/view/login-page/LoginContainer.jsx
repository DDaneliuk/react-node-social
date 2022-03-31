import React from 'react'
import {connect} from "react-redux";
import LoginPage from "./LoginPage";

class LoginContainer extends React.Component{
    render(){
        return(<LoginPage/>)
    }
}

export default connect()(LoginContainer)
