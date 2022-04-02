const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    username: null,
    isLoggedIn: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.userData}
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, username, isLoggedIn) => ({
    type: SET_USER_DATA,
    userData: {userId, email, username, isLoggedIn}
})

export default authReducer

