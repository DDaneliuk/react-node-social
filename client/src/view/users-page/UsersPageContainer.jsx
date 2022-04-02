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
    unfollow
} from "../../redux/reducers/users";
import Preloader from "../../components/preloader/Preloader";

class UsersPageContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingToggle(true)
        axios.get(`http://localhost:3001/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                this.props.setUsers(res.data.users)
                this.props.setUsersCount(res.data.totalCount)
                this.props.isFetchingToggle(false)
            })
    }

    onPageChanged = (page) => {
        this.props.isFetchingToggle(true)
        this.props.setCurrentPage(page)
        axios.get(`http://localhost:3001/users?page=${page}&limit=${this.props.pageSize}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                this.props.setUsers(res.data.users)
                this.props.setUsersCount(res.data.totalCount)
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

const
    mapStateToProps = (state) => {
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
    unfollow,
    setCurrentPage,
    setUsersCount,
    isFetchingToggle
})

(
    UsersPageContainer
)

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
