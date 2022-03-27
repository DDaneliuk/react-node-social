import React from 'react'
import UserCard from "../../components/users/UserCard";
// style
import style from './UsersPage.module.scss'

const UsersPage = (props) => {
    debugger
    return (
        <div className='pageLayout'>
            <h1>Users</h1>
            <div className='flexContainer'>
                <div className='sideBar'>
                    <h2>Filters</h2>
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
