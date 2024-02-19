import React from "react";
import classes from './Preloader.module.css';
import spinner from "../../../assets/images/spinner.gif";

const Preloader = (props) => {
    return (
        <img src={spinner} alt="preloader gif"/>
    );
};

export default Preloader;