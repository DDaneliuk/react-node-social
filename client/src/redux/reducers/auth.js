const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_TOKEN = 'SET_USER_TOKEN';

const initialState = {
    userId: null,
    email: null,
    username: null,
    isLoggedIn: false,
    token: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        case SET_USER_TOKEN: {
            return {...state, token: action.token}
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, username) => ({type: SET_USER_DATA, data: {userId, email, username}})
export const setUserToken = (token) => ({type: SET_USER_TOKEN, token})

export default authReducer

