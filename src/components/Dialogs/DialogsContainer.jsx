import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    };
                    const onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageTextCreator(body));
                    };

                    return <Dialogs
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={onNewMessageChange}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;