import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profile";

const PostsContainer = (props) => {
    const state = props.store.getState()
    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<Posts updateNewPostText={onPostChange}
                   addPost={addPostHandler}
                   posts={state.profilePage.posts}
                   postAreaText={state.profilePage.postAreaText}/>);
};
export default PostsContainer;
