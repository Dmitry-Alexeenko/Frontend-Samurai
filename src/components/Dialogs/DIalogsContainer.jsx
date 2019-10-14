import React from 'react';
import {addMessageCreator, changeMessageCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => { //обрашаемся сразу к стейт, а не к стору благодаря connect
    return{
        dialogsPage: state.dialogsPage  //возвращает объект с данными которые мы взяли из стейта
    };
};

let mapDispatchToProps = (dispatch) => { //возвращает объект с колбеками. обрашаемся сразу к dispatch, а не к стору благодаря connect
    return{
        addNewMessage: () => {dispatch(addMessageCreator())},
        changeNewMessage:(text) => {dispatch(changeMessageCreator(text))}
    };
};

//connect возвращает новую контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //dвызываем функцию 2 раза (вызываем ф-ю connect, а она вернула другую функцию и я вызываю эту функцию
//и во вторые скобки мы передаем презентационную компоненту
export default DialogsContainer;