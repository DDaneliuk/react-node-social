import React from "react";
// style
import style from './UserCard.module.scss'

const UserCard = (props) => {
    console.log(props.user.id)
    return (
        <div className={style.userCard}>
            <div>
                <p className={style.userName}>{props.user.firstName}</p>
                <p className={style.userStatus}>{props.user.status}</p>
            </div>
            <div className={style.userFollow}>
                <p>{props.user.location.city}, {props.user.location.country}</p>
                {props.user.followed ?
                    <button className='primaryBtn' onClick={() => props.unfollow(props.user.id)}>UnFollow</button> :
                    <button className='primaryBtn' onClick={() => props.follow(props.user.id)}>Follow</button>
                }
            </div>
        </div>
    )
}

export default UserCard

