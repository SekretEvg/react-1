const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            break;
        case SEND_MESSAGE:
            const body = state.newMessageText;
            state.messages.push({id: 6, message: body});
            state.newMessageText = '';
            break;
        default:
            return state;
    }
    return state;
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});
export default dialogsReducer;