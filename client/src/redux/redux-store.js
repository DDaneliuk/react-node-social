import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})

const store = createStore(reducers);

export default store
