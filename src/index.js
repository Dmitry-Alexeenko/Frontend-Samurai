import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>  {/*bind означает что ты захардкодили this у этой функции. И при ее вызове она будет обращаться к store, а не к пропсу*/}
            <Provider store={store}>
                <App state = {store.getState ()} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
