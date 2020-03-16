import React from 'react';
import c from '../../../styles/Message.module.scss';

const Message = (props) => {
    return (
        <div className={c.message}>
            <span className={c.message__item}>{props.content}</span>
        </div>

    )
};

export default Message;