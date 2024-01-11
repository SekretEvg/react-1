import React from "react";
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src='https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;