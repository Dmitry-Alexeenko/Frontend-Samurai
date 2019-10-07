import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';

let rerenderEntireTree = () => {
    ReactDOM.render(<App
        state = {store.getState ()} // тут .bind не надо потому что мы уже его вызываем
        dispatch={store.dispatch.bind(store)} // .bind означает что ты захардкодили this у этой функции. И при ее вызове она будет обращаться к store, а не к пропсу
    />, document.getElementById('root'));
};
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
