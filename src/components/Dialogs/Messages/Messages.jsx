import React, {useEffect} from 'react';
import styles from '../../../styles/Message.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getListMessages, sendMessage} from "../../../Redux/reducers/dialogs-reducer";
import DialogsForm from "../DialogsForm/DialogsForm";


const Messages = (props) => {
    const messages = useSelector(state => state.dialogsPage.messages);
    const myId = useSelector(state => state.auth.id);
    let {id} = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMessages(id))
    }, [dispatch, id]);

    const onSubmit = (formData) => {
        dispatch(sendMessage(id, formData))
    };

    let messageList = messages.map((item, index) => (
        <div key={index} className={item.senderId === myId ? styles.message_right : styles.message_left}>

            <div>
                <span className={styles.message__item}>{item.body}</span>
            </div>

            <div>
                <span>{item.addedAt}</span>
            </div>

            {item.senderId === myId &&
            <div>
                   <span>
                       {item.viewed ? "прочитано" : "не прочитано"}
                   </span>
            </div>}


        </div>
    ));

    return (
        <div className={styles.messages}>
            <div>
                {messageList}
            </div>
            <div className={styles.textTupe}>
                <DialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default Messages;