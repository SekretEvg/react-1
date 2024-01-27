import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewMessageText={store.updateNewMessageText.bind(store)}
             addNewMusicGroup={store.addNewMusic.bind(store)}
             updateNewMusicText={store.updateNewMusicText.bind(store)}
             removeMusic={store.removeMusic.bind(store)}
        />
    );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

