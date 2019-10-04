import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  //импортируем код css с других файлов, он отл от импорта js
import App from './App';






export let rerenderEntireTree = (state, addPost, changeText, changeMessage, addMessage) => {  //функция которая контролирует перерисовку всего. Если STATE изменен надо заново все запустить что бы взялся актуальный STATE
    //и эту функцию надо вызывать внутри STATE, потому что только он знает что там произошло
    ReactDOM.render(<App state={state} addPost={addPost} changeText={changeText} changeMessage={changeMessage} addMessage={addMessage}/>, document.getElementById('root')); //вставляем арр из app.js в элемент с тегом root
    //функцию addPost прикитываем через пропсы
};