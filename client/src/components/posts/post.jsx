import React from "react";
import style from "./post.module.scss"
import profileImg from "../../assets/img/profile-img.jpg"

const Post = (props) => {
    console.log(props)
    return (
        <div className={style.post}>
            <img src={profileImg} className={style.imgPost} alt="profile" />
            <div className={style.allinfo}>
                <p className={style.userName}>{props.name}</p>
                <p className={style.postText}>
                Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook
                </p>
            </div>
        </div>
    )
}

export default Post 