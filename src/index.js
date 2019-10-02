import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';  //импортируем код js с других файлов 
import * as serviceWorker from './serviceWorker';
import state from "./Redux/state";




ReactDOM.render(<App state={state}/>, document.getElementById('root')); //вставляем арр из app.js в элемент с тегом root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
