import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const {dialogs, messages} = props.state;
    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    const newMessageElement = React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
};

export default Dialogs;