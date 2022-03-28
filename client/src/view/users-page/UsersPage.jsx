import React from 'react'
import style from "./UsersPage.module.scss";
import UserCard from "../../components/users/UserCard";
import Pagination from "../../components/pagination/Pagination";

const UsersPage = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                        <p className={style.subTitle}>All users {props.totalUsersCount}</p>
                    </div>
                    <h2>Filters</h2>
                </div>
                <div className={style.usersWidth}>
                    {props.users.map(u => (
                        <UserCard key={u.id}
                                  user={u}
                                  follow={(userId) => props.follow(userId)}
                                  unfollow={(userId) => props.unfollow(userId)}
                        />
                    ))}
                    <Pagination pages={pages}
                                currentPage={props.currentPage}
                                setCurrentPage={props.setCurrentPage}
                                onPageChanged={props.onPageChanged}/>
                </div>
            </div>
        </div>
    )
}

export default UsersPage
