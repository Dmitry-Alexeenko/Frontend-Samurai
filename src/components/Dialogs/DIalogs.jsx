import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>
            {props.content}
        </div>
    )
}

const Dialogs = (props) => {

    let usersData = [                     //по сути это BLL, тут хранятся данные
        {id:1, name:"Dimas"},
        {id:2, name:"Alex"},
        {id:3, name:"Sergy"},
        {id:4, name:"Anton"},
        {id:5, name:"Kate"}
    ];
    let messagesData = [
        {id:1, message:"Hi, my name is Dima."},
        {id:2, message:"Hi, my name is Anton."},
        {id:3, message:"How are you?"},
        {id:4, message:"not bad"},
        {id:5, message:"ok"}
    ];

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name={usersData[0].name} id={usersData[0].id}/>
                <DialogItem name={usersData[1].name} id={usersData[1].id}/>
                <DialogItem name={usersData[2].name} id={usersData[2].id}/>
                <DialogItem name={usersData[3].name} id={usersData[3].id}/>
                <DialogItem name={usersData[4].name} id={usersData[4].id}/>
            </div>
            <div className={c.messages}>
                <Message content={messagesData[0].message} id={messagesData[0].id}/>
                <Message content={messagesData[1].message} id={messagesData[1].id}/>
                <Message content={messagesData[2].message} id={messagesData[2].id}/>
                <Message content={messagesData[3].message} id={messagesData[3].id}/>
                <Message content={messagesData[4].message} id={messagesData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs;