import React from "react";
import classes from './MusicItem.module.css';

const MusicItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className={classes.musicItem}>{props.musicGroup}</div>
            <button className={classes.btn} onClick={() => props.removeMusic(props.id)}>DEL</button>
        </div>


    );
};

export default MusicItem;