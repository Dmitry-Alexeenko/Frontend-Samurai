import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state, {addMessage, changeMessage, changeText} from "./Redux/state";
import {addPost} from "./Redux/state"; //addPost импорт отдельной функции из файла state



rerenderEntireTree(state, addPost, changeText, changeMessage, addMessage); //вызываем эту функцию


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
