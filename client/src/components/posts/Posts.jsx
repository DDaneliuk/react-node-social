import React from "react";
import Post from "./Post";
import style from "./Posts.module.scss";

const Posts = (props) => {
    let postsElements = props.posts.map((post) => (
        <Post data={post} key={post.id}/>
    ));

    let newPostElement = React.createRef();

    const addPostHandler = (e) => {
        e.preventDefault()
        props.addPostAction()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextAction(text)
    }

    return (
        <div className={style.container}>
            <h1>My Posts</h1>
            <form>
                <textarea
                    ref={newPostElement}
                    rows="3"
                    placeholder="Write something new..."
                    value={props.postAreaText}
                    onChange={onPostChange}
                />
                <div className={style.messageBtn}>
                    <p className={style.hint}>Press button to posts your thoughts</p>
                    <button onClick={(e) => addPostHandler(e)}
                            className='primaryBtn'>Add post
                    </button>
                </div>
            </form>
            <div className={style.posts}>
                <h2>Your latest posts</h2>
                {postsElements}
            </div>
        </div>
    );
};
export default Posts;
