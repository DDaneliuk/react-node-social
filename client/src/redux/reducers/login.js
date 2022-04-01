const SET_LOGIN_USERNAME = 'SET_LOGIN_USERNAME';
const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
const SET_LOGIN_SERVER_MESS = 'SET_LOGIN_SERVER_MESS'

const initialState = {
    username: null,
    password: null,
    createdAt: null,
    serverMessage: null,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_EMAIL: {
            return {...state, email: action.email}
        }
        case SET_LOGIN_USERNAME: {
            return {...state, username: action.username}
        }
        case SET_LOGIN_PASSWORD: {
            return {...state, password: action.password}
        }
        case SET_LOGIN_SERVER_MESS:{
            return {...state, serverMessage: action.mess}
        }

        default:
            return state;
    }
}

export const setLoginUserEmail = (email) => ({type: SET_LOGIN_EMAIL, email})
export const setLoginUserUsername = (username) => ({type: SET_LOGIN_USERNAME, username})
export const setLoginUserPassword = (password) => ({type: SET_LOGIN_PASSWORD, password})
export const setLoginServerMess = (mess) => ({type: SET_LOGIN_SERVER_MESS, mess})

export default loginReducer

