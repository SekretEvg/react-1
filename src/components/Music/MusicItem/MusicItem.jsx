import React from "react";
import classes from './MusicItem.module.css';
import {removeMusicCreator} from "../../../redux/reducers/music-reducer";

const MusicItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className={classes.musicItem}>{props.musicGroup}</div>
            <button className={classes.btn} onClick={() => props.dispatch(removeMusicCreator(props.id))}>DEL</button>
        </div>


    );
};

export default MusicItem;