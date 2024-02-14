import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    };

    return (
        <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} dialogsPage={state}/>
    );
};

export default DialogsContainer;