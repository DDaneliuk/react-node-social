import React from "react";
import Post from "./post";
import style from "./posts.module.scss";

const Posts = (props) => {
  let postsElements = props.data.posts.map((post) => (
    <Post data={post} key={post.id} />
  ));

  let newPostElement = React.createRef();

  const clickBtn = (e) => {
    e.preventDefault();
    props.addPost("willsmith");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={style.container}>
      <h1>My Posts</h1>
      <form>
        <textarea
          ref={newPostElement}
          className={style.textarea}
          rows="3"
          placeholder="Write something new..."
          value={props.data.postAreaText}
          onChange={onPostChange}
        ></textarea>
        <div className={style.messageBtn}>
          <p className={style.hint}>Press button to posts your thoughts</p>
          <button onClick={(e) => clickBtn(e)} className={style.primaryBtn}>
            Add post
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
