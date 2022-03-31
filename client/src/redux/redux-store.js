import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";
import usersReducer from "./reducers/users";
import authReducer from "./reducers/auth";
import signupReducer from "./reducers/signup";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    signupPage: signupReducer
})

const store = createStore(reducers);

export default store
