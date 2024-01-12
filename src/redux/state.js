import rerenderEntireTree from "../render";

const state = {
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
        newMessageText: 'i am message text',
    },
    sidebar: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ],
};
window.state = state;

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    const newMessage = {
        id: 6, message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};
export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
};
export default state;