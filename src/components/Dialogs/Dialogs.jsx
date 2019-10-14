import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DIalogItem";

class Dialogs extends React.Component {
    addMessage = () => {
        this.props.addNewMessage();
    };

    changeMessage = (e) => {     //е- объект события, или еще event
        let text = e.target.value;  //у е есть .target(т.к эта функция от textarea, то.target=textarea) и мы берем value у textarea в лице .target
        this.props.changeNewMessage(text);
    };

    render() {
        return (
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {this.props.dialogsPage.users.map(u => (<DialogItem name={u.name} key={u.id} id={u.id}/>))}
                </div>
                <div className={c.messages}>
                    <div>
                        {this.props.dialogsPage.messages.map(m => (
                            <Message content={m.message} key={m.id} id={m.id}/>))}
                    </div>
                    <div className={c.textTupe}>
                        <div>
                            <textarea onChange={this.changeMessage} value={this.props.dialogsPage.textNewMessages}
                                      placeholder="Enter your message"/>
                        </div>
                        <div>
                            <button onClick={this.addMessage}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dialogs;