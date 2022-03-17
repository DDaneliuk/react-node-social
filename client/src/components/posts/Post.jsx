import React from "react";
import style from "./Post.module.scss"
import profileImg from "../../assets/img/profile-img.jpg"

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={profileImg} className={style.imgPost} alt="profile" />
            <div className={style.allinfo}>
                <p className={style.userName}>{props.data.userName}</p>
                <p className={style.postText}>
                {props.data.post}
                </p>
            </div>
        </div>
    )
}

export default Post
