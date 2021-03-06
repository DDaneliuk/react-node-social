const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Nick'}
    ],
    messages: [
        {id: 1, messages: "[TEST MESSAGE] first message"},
    ],
    newMessageBody: ""
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 2, messages: `[TEST MESSAGE] ${body}`}],
                newMessageBody: ''};
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.body};
        }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messageReducer

