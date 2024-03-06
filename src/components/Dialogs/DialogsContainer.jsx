import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// const DialogsContainers = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().dialogsPage;
//                     const onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     };
//                     const onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageTextCreator(body));
//                     };
//
//                     return <Dialogs
//                         sendMessage={onSendMessageClick}
//                         updateNewMessageBody={onNewMessageChange}
//                         dialogsPage={state}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// };
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        }
    }
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;