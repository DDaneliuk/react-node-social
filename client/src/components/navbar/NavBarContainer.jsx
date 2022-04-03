import React from 'react'
import NavBar from "./NavBar";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/reducers/auth";

class NavBarContainer extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3001/auth', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        }).then(res => {
            const {isLoggedIn} = res.data
            if (isLoggedIn) {
                const {id, username, email} = res.data.data
                this.props.setUserData(id, username, email, isLoggedIn)
            }
        })
    }

    render() {
        return (<NavBar {...this.props}
                        isLoggedIn={this.props.isLoggedIn}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {setUserData})(NavBarContainer)
