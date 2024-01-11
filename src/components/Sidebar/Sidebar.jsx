import React from "react";
import classes from './Sidebar.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    const sidebarElements = props.friends.map(f => <SidebarItem name={f.name} key={f.id}/>);
    return (
        <div className={classes.sidebar}>
            <h3>Friends</h3>
            <div className={classes.sidebarItems}>
                {sidebarElements}
            </div>
        </div>

    );
};

export default Sidebar;