import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/state";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    const newMessageBody = state.newMessageText;

    // const newMessageElement = React.createRef();
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (e) => {
        // const text = newMessageElement.current.value;
        // props.updateNewMessageText(text);
        const body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messageForm}>
                <textarea
                    // ref={newMessageElement}
                    placeholder={'Enter your message'}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                />
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;