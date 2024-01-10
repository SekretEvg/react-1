import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    );
};
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Evgeny' id='1'/>
                <DialogItem name='Sanya' id='2'/>
                <DialogItem name='Volodya' id='3'/>
                <DialogItem name='Dimasik' id='4'/>
                <DialogItem name='Nadezhda' id='5'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Fine'/>
                <Message message='Fine'/>
                <Message message='Fine'/>
            </div>
        </div>
    );
};

export default Dialogs;