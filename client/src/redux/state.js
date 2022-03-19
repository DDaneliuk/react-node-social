import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
// message
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Nick'}
            ],
            messages: [
                {id: 1, messages: "TEST first message"},
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("state has changed")
    },
    subscribe(observe) {
        this._callSubscriber = observe
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)

        this._callSubscriber(this._state);
    }
}

export default store;

