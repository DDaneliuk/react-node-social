const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
//pagination
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 20,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]}

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        default:
            return state;
    }
}

export const setUsersAc = (users) => ({type: 'SET_USERS', users})
export const followAc = (userId) => ({type: 'FOLLOW', userId})
export const unFollowAc = (userId) => ({type: 'UNFOLLOW', userId})
//pagination
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setUsersCount = (count) => ({type: 'SET_USERS_COUNT', count})

export default usersReducer;
