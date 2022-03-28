import React from 'react'
import style from "./UsersPage.module.scss";
import UserCard from "../../components/users/UserCard";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";

class UsersPageClass extends React.Component {
    componentDidMount() {
        console.log('componentDidMount()')
        axios.get(`http://localhost:8000/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data)
                this.props.setUsersCount(res.headers["x-total-count"])
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`http://localhost:8000/users?_page=${page}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data)
                this.props.setUsersCount(res.headers["x-total-count"])
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className='pageLayout'>
                <div className='flexContainer'>
                    <div className='sideBar'>
                        <div>
                            <h1 className={style.heading}>Users</h1>
                            <p className={style.subTitle}>All users {this.props.totalUsersCount}</p>
                        </div>
                        <h2>Filters</h2>
                        {/*<button className='primaryBtn' onClick={this.getUsers}>Get users</button>*/}
                    </div>
                    <div className={style.usersWidth}>
                        {this.props.users.map(u => (
                            <UserCard key={u.id}
                                      user={u}
                                      follow={(userId) => this.props.follow(userId)}
                                      unfollow={(userId) => this.props.unfollow(userId)}
                            />
                        ))}
                        <Pagination pages={pages}
                                    currentPage={this.props.currentPage}
                                    setCurrentPage={this.props.setCurrentPage}
                                    onPageChanged={this.onPageChanged}/>
                    </div>
                </div>
            </div>

        )
    }

}

export default UsersPageClass
