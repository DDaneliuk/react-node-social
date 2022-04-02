import React from "react";
// style
import style from './UserCard.module.scss'
import {NavLink} from "react-router-dom";

const UserCard = (props) => {
    return (
        <div className={style.userCard}>
            <div className={style.flexCard}>
                <div className={style.nameBlock}>
                    <NavLink to={`/profile/${props.user._id}`}> <p className={style.userName}>{props.user.username}</p></NavLink>
                </div>
                <div className={style.userFollow}>
                    <p>{props.user.location.city}, {props.user.location.country}</p>
                    {props.user.followed ?
                        <button className='outlineBtn' onClick={() => props.unfollow(props.user._id)}>Followed</button> :
                        <button className='primaryBtn' onClick={() => props.follow(props.user._id)}>Follow</button>
                    }
                </div>

            </div>
            <div>
                <p className={style.userStatus}>{props.user.status}</p>
            </div>
        </div>
    )
}

export default UserCard

