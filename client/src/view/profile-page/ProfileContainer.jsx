import React from 'react'
import ProfilePage from "./ProfilePage";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile";

class ProfileContainer extends React.Component {
    debugger
    componentDidMount() {
        axios.get(`http://localhost:8000/profile/${this.props.params.id}`)
            .then(res => {
                this.props.setUserProfile(res.data);
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
