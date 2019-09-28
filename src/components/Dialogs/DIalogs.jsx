import React from 'react';
import c from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog}>
                    Dmitry
                </div>
                <div className={c.dialog}>
                    Alex
                </div>
                <div className={c.dialog}>
                    Sergy
                </div>
                <div className={c.dialog}>
                    Anton
                </div>
                <div className={c.dialog}>
                    Kate
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>
                    Hi, my name is Dima.
                </div>
                <div className={c.message}>
                    Hi, my name is Anton.
                </div>
                <div className={c.message}>
                    How are you?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;