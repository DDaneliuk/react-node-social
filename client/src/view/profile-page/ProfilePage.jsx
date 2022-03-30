import React from 'react';
import style from './ProfilePage.module.scss'
import PostsContainer from "../../components/posts/PostsContainer";
import Preloader from "../../components/preloader/Preloader";

const ProfilePage = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={style.profile}>
            <div className={style.info}>
                <div className={style.blockImg}>
                    <img className={style.imgMain} src={props.profile.profileUrl} alt="profile"/>
                </div>
                <div className={style.details}>
                    <h2 className={style.userName}>{props.profile.username}</h2>
                    <div className="person">
                        <ul>
                            <li className={style.listItem}>{props.profile.firstname} {props.profile.lastname}</li>
                            <li className={style.listItem}>{props.profile.birthday}</li>
                            <li className={style.listItem}>{props.profile.location.city} {props.profile.location.country}</li>
                            <li className={style.listItem}>{props.profile.whois} </li>
                        </ul>
                    </div>
                </div>
            </div>
            <PostsContainer profile={props.profile}/>
        </div>
    )
}

export default ProfilePage
