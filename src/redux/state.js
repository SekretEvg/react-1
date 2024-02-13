const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 24},
            ],
            newPostText: 'i am post text!',
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ],
        musicPage: {
            musicList: [
                {id: 1, musicGroup: 'Sia'},
                {id: 2, musicGroup: 'One Republic'},
                {id: 3, musicGroup: 'Noize MC'},
                {id: 4, musicGroup: 'Queen'},
            ],
            newMusicGroup: 'New Song',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн observer
    },

    dispatch(action) {
        console.log(action)
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    },

    addNewMusic() {
        const newMusicGroup = {
            id: 5, musicGroup: this._state.musicPage.newMusicGroup,
        };
        this._state.musicPage.musicList.push(newMusicGroup);
        this._state.musicPage.newMusicGroup = '';
        this._callSubscriber(this._state);
    },
    updateNewMusicText(newMusicText) {
        this._state.musicPage.newMusicGroup = newMusicText;
        this._callSubscriber(this._state);
    },
    removeMusic(id) {
        this._state.musicPage.musicList = this._state.musicPage.musicList.filter(m => m.id !== id);
        console.log(this._state.musicPage.musicList)
        this._callSubscriber(this._state);
    },
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});
export default store;
window.store = store;
