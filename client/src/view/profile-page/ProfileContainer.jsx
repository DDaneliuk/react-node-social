import React from 'react'
import ProfilePage from "./ProfilePage";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/profile/${this.props.params.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                this.props.setUserProfile(res.data.user);
            })
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
