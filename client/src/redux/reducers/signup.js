const SIGNUP_USER = 'SIGNUP_USER';
const SET_USERNAME = 'SET_USERNAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_SERVER_MESS = 'SET_SERVER_MESS'

const initialState = {
    email: null,
    username: null,
    password: null,
    serverMessage: null
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER: {
            return {...state}
        }
        case SET_EMAIL: {
            return {...state, email: action.email}
        }
        case SET_USERNAME: {
            return {...state, username: action.username}
        }
        case SET_PASSWORD: {
            return {...state, password: action.password}
        }
        case SET_SERVER_MESS:{
            return {...state, serverMessage: action.mess}
        }

        default:
            return state;
    }
}

export const signUpUser = (username, email, password) => ({type: SIGNUP_USER, data: username, email, password})
export const setUserEmail = (email) => ({type: SET_EMAIL, email})
export const setUserUsername = (username) => ({type: SET_USERNAME, username})
export const setUserPassword = (password) => ({type: SET_PASSWORD, password})
export const setServerMess = (mess) => ({type: SET_SERVER_MESS, mess})

export default signupReducer

