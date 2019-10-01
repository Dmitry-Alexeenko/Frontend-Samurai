import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';  //импортируем код js с других файлов 
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message:"Dorow, my name is React", likesCount:1},
    {id:2, message:"It is first post", likesCount:16},
    {id:3, message:"It is thirst post", likesCount:9},
    {id:3, message:"yes", likesCount:0}
];

let users = [                     //по сути это BLL, тут хранятся данные
    {id:1, name:"Dimas"},
    {id:2, name:"Alex"},
    {id:3, name:"Sergy"},
    {id:4, name:"Anton"},
    {id:5, name:"Kate"},
    {id:6, name:"Mark"}
];

let messages = [
    {id:1, message:"Hi, my name is Dima."},
    {id:2, message:"Hi, my name is Anton."},
    {id:3, message:"How are you?"},
    {id:4, message:"not bad"},
    {id:5, message:"ok"},
    {id:6, message:"okokok"}
];

ReactDOM.render(<App post={posts} userss={users} messagess={messages}/>, document.getElementById('root')); //вставляем арр из app.js в элемент с тегом root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
