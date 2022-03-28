import {connect} from "react-redux";
import {followAc, setCurrentPage, setUsersAc, setUsersCount, unFollowAc} from "../../redux/reducers/users";
import UsersPageClass from "./UsersPageClass";
// import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
          dispatch(setUsersAc(users))
        },
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAc(userId))
        },
        setCurrentPage: (currPage) => {
            dispatch(setCurrentPage(currPage))
        },
        setUsersCount: (count) => {
            dispatch(setUsersCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageClass)
