import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import musicReducer from "./reducers/music-reducer";

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
            newMusicGroup: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.musicPage = musicReducer(this._state.musicPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
