import React from "react";
import axios from "axios";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {
    follow,
    isFetchingToggle,
    setCurrentPage,
    setUsers,
    setUsersCount,
    unFollow
} from "../../redux/reducers/users";
import Preloader from "../../components/preloader/Preloader";

class UsersPageContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingToggle(true)
        axios.get(`http://localhost:8000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data)
                this.props.setUsersCount(res.headers["x-total-count"])
                this.props.isFetchingToggle(false)
            })
    }

    onPageChanged = (page) => {
        this.props.isFetchingToggle(true)
        this.props.setCurrentPage(page)
        axios.get(`http://localhost:8000/users?_page=${page}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data)
                this.props.setUsersCount(res.headers["x-total-count"])
                this.props.isFetchingToggle(false)
            })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersPage
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    totalUsersCount={this.props.totalUsersCount}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unFollow,
    setCurrentPage,
    setUsersCount,
    isFetchingToggle
})(UsersPageContainer)

// method to create dispatch to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAc(users))
//         },
//         follow: (userId) => {
//             dispatch(followAc(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAc(userId))
//         },
//         setCurrentPage: (currPage) => {
//             dispatch(setCurrentPage(currPage))
//         },
//         setUsersCount: (count) => {
//             dispatch(setUsersCount(count))
//         },
//         isFetchingToggle: (toggle) => {
//             dispatch(isFetchingToggle(toggle))
//         }
//     }
// }
