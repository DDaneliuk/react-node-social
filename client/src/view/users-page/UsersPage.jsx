import React from 'react'
import UserCard from "../../components/users/UserCard";
import axios from "axios";
// style
import style from './UsersPage.module.scss'

const UsersPage = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('http://localhost:8000/users').then(res => {
                props.setUsers(res.data)
            })
        }
    }
    return (
        <div className='pageLayout'>
            <h1>Users</h1>
            <div className='flexContainer'>
                <div className='sideBar'>
                    <h2>Filters</h2>
                    <button className='primaryBtn' onClick={getUsers}>Get users</button>
                </div>
                <div className={style.usersWidth}>
                    {props.users.map(u => (
                        <UserCard key={u.id} user={u} follow={(userId)=>props.follow(userId)} unfollow={(userId) => props.unfollow(userId)}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default UsersPage
