import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DIalogItem";


const DIalogsOLD = (props) => {
    let dialogsElements = props.dialogsPage.users.map(u => (<DialogItem name={u.name} key={u.id} id={u.id}/>));
    let messageElements = props.dialogsPage.messages.map(m => (<Message content={m.message}  key={m.id} id={m.id}/>));

    let addMessage = () => {
        props.addNewMessage();
    };
    let changeMessage = (e) => {     //е- объект события, или еще event
        let text = e.target.value;  //у е есть .target(т.к эта функция от textarea, то.target=textarea) и мы берем value у textarea в лице .target
        props.changeNewMessage(text);
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
                        <textarea onChange={changeMessage} value={props.dialogsPage.textNewMessages}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DIalogsOLD;