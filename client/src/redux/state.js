// posts
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
    dispatch(action) { // action == object with {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                userName: "willsmith",
                post: this._state.profilePage.postAreaText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.postAreaText = ""
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.postAreaText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messages.push({id: 2, messages: body});
            this._callSubscriber(this._state);
        }
    }
}
// posts
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
// messages
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;

