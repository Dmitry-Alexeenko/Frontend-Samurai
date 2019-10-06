import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DIalogItem";
import {addMessageActionCreator, changeMessageActionCreator} from "../../Redux/state";

const Dialogs = (props) => {
   /* let dialogsElements = [
        <DialogItem name={users[0].name} id={users[0].id}/>,  //создаем массив из элементов которые ниже. ТАкой массив создает MAP
        <DialogItem name={users[1].name} id={users[1].id}/>,  // т.е с сервака приходят данные типа users и мы мапом их преобразуем в массив
        <DialogItem name={users[2].name} id={users[2].id}/>,  //который нам нужен
        <DialogItem name={users[3].name} id={users[3].id}/>,
        <DialogItem name={users[4].name} id={users[4].id}/>]*/
   let dialogsElements = props.state.users.map( u => (<DialogItem name={u.name} id={u.id}/>)); //Этой записью мы создали массив аналогичный закоммент. сверху
    let messageElements = props.state.messages.map( m => (<Message content={m.message} id={m.id}/>)); //мап как циел, он проходит по всем элементам
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let changeMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(changeMessageActionCreator(text));
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>
                    {messageElements}
                </div>
                <div className={c.textTupe}>
                    <div>
                        <textarea onChange={changeMessage} ref={newMessageElement} value={props.state.textNewMessages}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>new message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;