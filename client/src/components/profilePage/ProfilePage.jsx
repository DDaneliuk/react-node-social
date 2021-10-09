import React from 'react';
import style from './profilePage.module.scss'
import Posts from '../posts/posts';
import profileImg from '../../assets/img/profile-img.jpg';

const ProfilePage = () => {
    return(
        <div className={style.profile}>
            <div className={style.info}>
                <div className={style.blockImg}>
                    <img className={style.imgMain} src={profileImg} alt="profile" />
                </div>
                <div className={style.details}>
                    <h2>Will Smith</h2>
                    <div className="person">
                        <ul>
                            <li className={style.listItem}>Date of Dirth: 25 Sep 1968</li>
                            <li className={style.listItem}>Place: Philadelphia USA</li>
                            <li className={style.listItem}>Who is: Actor</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Posts />
        </div>
    )
}

export default ProfilePage