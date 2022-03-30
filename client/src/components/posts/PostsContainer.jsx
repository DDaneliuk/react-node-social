import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profile";

const mapStateToProps = (store) => {
    return {
        posts: store.profilePage.posts,
        postAreaText: store.profilePage.postAreaText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostAction: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostTextAction: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
