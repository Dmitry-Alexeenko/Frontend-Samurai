import React, {useEffect} from 'react';
import styles from '../../../styles/Message.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getListMessages, sendMessage} from "../../../Redux/reducers/dialogs-reducer";
import DialogsForm from "../DialogsForm/DialogsForm";


const Messages = (props) => {
    const messages = useSelector(state => state.dialogsPage.messages);
    let {id} = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMessages(id))
    }, [dispatch, id]);

    const onSubmit = (formData) => {
        dispatch(sendMessage(id, formData))
    };
    console.log(messages, "messages");

    let messageList = messages.map((item, index) => (
        <div key={index} className={styles.message}>
            <span className={styles.message__item}>{item.body}</span>
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