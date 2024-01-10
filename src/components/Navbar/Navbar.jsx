import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeClassName = navData => navData.isActive ? classes.activeLink : classes.item;
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         className={activeClassName}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={activeClassName}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={activeClassName}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={activeClassName}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? classes.activeLink : classes.item}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;