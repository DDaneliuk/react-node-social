import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile";
import messageReducer from "./reducers/message";
import usersReducer from "./reducers/users";
import authReducer from "./reducers/auth";
import signupReducer from "./reducers/signup";
import loginReducer from "./reducers/login";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    signupPage: signupReducer,
    loginPage: loginReducer,
})

const store = createStore(reducers);
window.store = store

export default store
