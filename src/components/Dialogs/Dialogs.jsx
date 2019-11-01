import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DIalogItem";
import DialogsForm from "./DialogsForm/DialogsForm";


let Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.addMessage(formData)
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {props.dialogsPage.users.map(u => (<DialogItem name={u.name} key={u.id} id={u.id}/>))}
            </div>
            <div className={c.messages}>
                <div>
                    {props.dialogsPage.messages.map(m => (
                        <Message content={m.message} key={m.id} id={m.id}/>))}
                </div>
                <div className={c.textTupe}>
                    <DialogsForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )

};


export default Dialogs;