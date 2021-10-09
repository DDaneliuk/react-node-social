import React from "react";
import Post from "./post"
import style from "./posts.module.scss"

const Posts = () => {
    return (
        <div className={style.container}>
            <h1>My Posts</h1>
            <form>
                <textarea className={style.textarea} rows="3" placeholder="Write something interesting..."></textarea>
                <div className={style.messageBtn}>
                    <p className={style.hint}>Press button to posts your thoughts</p>
                    <button className={style.primaryBtn}>Add post</button>   
                </div>
            </form>
            <div className={style.posts}>
                <h2>Your latest posts</h2>
                <Post name="willsmith"/>
                <Post name="willsmith"/>
                <Post name="willsmith"/>
            </div>
        </div>
    )
}
export default Posts