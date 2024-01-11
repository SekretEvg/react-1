import React from "react";
import classes from "./SidebarItem.module.css";
import {NavLink} from "react-router-dom";

const SidebarItem = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
                     alt="avatar"/>
            </div>
            <NavLink to='/profile'>{props.name}</NavLink>
        </div>
    );
};

export default SidebarItem;