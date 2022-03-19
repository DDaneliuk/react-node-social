import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";

let store = {
    _state: {
        profilePage: {

        },
        messagePage: {

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

