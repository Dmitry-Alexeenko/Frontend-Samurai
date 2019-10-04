import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';  //импортируем код js с других файлов
import {addPost} from "./Redux/state"; //addPost импорт отдельной функции из файла state

export let rerenderEntireTree = (state) => {  //функция которая контролирует перерисовку всего. Если STATE изменен надо заново все запустить что бы взялся актуальный STATE
    //и эту функцию надо вызывать внутри STATE, потому что только он знает что там произошло
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root')); //вставляем арр из app.js в элемент с тегом root
    //функцию addPost прикитываем через пропсы
};