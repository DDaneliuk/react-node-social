const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {
            id: 1,
            userName: "willsmith",
            post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
            likes: 0
        },
        {
            id: 2,
            userName: "willsmith",
            post: "Y’all gotta see how @bmike2c made the art for my book— there’s levels to it!! 5 layers, each repping a different stage of my life…Beautiful! Pre-order the book, link in bio. Big thanx @brianbowensmith for the original pic. #WillTheBook",
            likes: 0
        },
    ],
    postAreaText: "",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                userName: "willsmith",
                post: state.postAreaText,
                likes: 0
            };
        return {...state, posts: [...state.posts, newPost], postAreaText: ''}
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state, postAreaText: action.text}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;
