import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";
import usersReducer from "./reducers/users";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

export default store
