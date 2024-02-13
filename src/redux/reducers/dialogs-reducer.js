const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Evgeny'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Volodya'},
        {id: 4, name: 'Dimasik'},
        {id: 5, name: 'Nadezhda'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'Ok lets go'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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