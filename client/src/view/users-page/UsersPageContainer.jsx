import React from 'react'
import UsersPage from "./UsersPage";
import {followAc, setUsersAc, unFollowAc} from "../../redux/reducers/users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
          dispatch(setUsersAc(users))
        },
        follow: (userId) => {
            console.log(userId)
            dispatch(followAc(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAc(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
