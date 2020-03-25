import React, {useEffect} from 'react';
import styles from '../../../styles/Message.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getListMessages, sendMessage} from "../../../Redux/reducers/dialogs-reducer";
import DialogsForm from "../DialogsForm/DialogsForm";
import Moment from 'react-moment';
import {Scrollbars} from 'react-custom-scrollbars';


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
                <Moment format="YYYY-MM-DD HH:mm" className={styles.message__data}>{item.addedAt}</Moment>
                <p className={styles.message__item}>{item.body}</p>
            </div>

            {
                item.senderId === myId && !item.viewed &&
                <div>
                   <span className={styles.viewed}>
                        не прочитано
                   </span>
                </div>
            }
        </div>
    ));

    return (
        <div className={styles.messages}>
            <Scrollbars style={{ width: '100%', height: '85%'}}>
                {messageList}
            </Scrollbars>

            <div className={styles.textType}>
                <DialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default Messages;