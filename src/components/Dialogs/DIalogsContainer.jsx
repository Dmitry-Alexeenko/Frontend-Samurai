import React from 'react';
import {addMessageCreator, changeMessageCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./DIalogs";


const DialogsContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageCreator());
    };

    let changeMessage = (text) => {     //е- объект события, или еще event
        props.dispatch(changeMessageCreator(text));
    };

    return (<Dialogs addNewMessage={addMessage} changeNewMessage={changeMessage} state={props.state}/>)
};

export default DialogsContainer;