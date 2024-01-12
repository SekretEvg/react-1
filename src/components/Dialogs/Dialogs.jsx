import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const {dialogs, messages} = props.dialogsPage;
    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    const newMessageElement = React.createRef();
    const addMessage = () => {
        props.addMessage();
    };
    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messageForm}>
                <textarea ref={newMessageElement}
                          value={props.dialogsPage.newMessageText}
                          onChange={onMessageChange}
                />
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;