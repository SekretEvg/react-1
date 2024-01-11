import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {id: 1, name: 'Evgeny'},
    {id: 2, name: 'Sanya'},
    {id: 3, name: 'Volodya'},
    {id: 4, name: 'Dimasik'},
    {id: 5, name: 'Nadezhda'},
];
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'Ok lets go'},
];
const posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: "It's my first post", likeCount: 24},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
