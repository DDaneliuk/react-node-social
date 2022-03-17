import React from 'react';
import style from './ProfilePage.module.scss'
import Posts from '../../components/posts/Posts';
import profileImg from '../../assets/img/profile-img.jpg';

const ProfilePage = (props) => {
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
                            <li className={style.listItem}>Date of Birth: 25 Sep 1968</li>
                            <li className={style.listItem}>Place: Philadelphia USA</li>
                            <li className={style.listItem}>Who is: Actor</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Posts data={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default ProfilePage
