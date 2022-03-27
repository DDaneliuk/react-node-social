const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            firstName: 'Steph',
            status: 'I am new here, but I like it',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        case FOLLOW:
            debugger
            return {
                ...state,
                users: state.users.map(u => {if (u.id === action.userId) {return {...u, followed: true}}})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {if (u.id === action.userId) {return {...u, followed: false}}})
            }
        default:
            return state;
    }
}

export const setUsersAc = (users) => ({type: 'SET_USERS', users})
export const followAc = (userId) => ({type: 'FOLLOW', userId})
export const unFollowAc = (userId) => ({type: 'UNFOLLOW', userId})

export default usersReducer;
