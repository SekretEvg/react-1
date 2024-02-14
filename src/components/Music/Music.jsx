import React from "react";
import classes from './Music.module.css';
import MusicItem from "./MusicItem/MusicItem";

const Music = (props) => {
    const state = props.musicPage;
    const musicPageElements = state.musicList.map(m => <MusicItem id={m.id} musicGroup={m.musicGroup}
                                                                  key={m.id}
                                                                  removeMusic={props.removeMusic}/>);

    const changeHandler = (e) => {
        const text = e.target.value;
        props.updateNewMusicText(text);
    };
    const addHandler = () => {
        props.addNewMusic();
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