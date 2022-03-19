import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})

let store = createStore(reducers);

export default store
