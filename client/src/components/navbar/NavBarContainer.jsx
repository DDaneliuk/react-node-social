import React from 'react'
import NavBar from "./NavBar";
import axios from "axios";

class NavBarContainer extends React.Component {
    componentDidMount() {
        axios.get('http://localhost').then(res => res.data)
    }

    render() {
        return (<NavBar {...this.props}/>)
    }
}

export default NavBarContainer
