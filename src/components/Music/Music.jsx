import React from "react";
import classes from './Music.module.css';
import MusicItem from "./MusicItem/MusicItem";
import {addNewMusicCreator, updateNewMusicTextCreator} from "../../redux/reducers/music-reducer";

const Music = (props) => {
    const musicPageElements = props.musicPage.musicList.map(m => <MusicItem id={m.id} musicGroup={m.musicGroup}
                                                                            key={m.id}
                                                                            dispatch={props.dispatch}/>);

    const changeHandler = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewMusicTextCreator(text));
    };
    const addHandler = () => {
        props.dispatch(addNewMusicCreator());
    };

    return (
        <div className={classes.musicPage}>
            <div>
                {musicPageElements}
            </div>
            <div>
                <textarea placeholder={'New music artist'} onChange={changeHandler}
                          value={props.musicPage.newMusicGroup}/>
                <div>
                    <button onClick={addHandler}>Add New Song</button>
                </div>
            </div>
        </div>

    );
};

export default Music;