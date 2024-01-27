import React from "react";
import classes from './Music.module.css';
import MusicItem from "./MusicItem/MusicItem";

const Music = (props) => {
    const musicPageElements = props.musicPage.musicList.map(m => <MusicItem id={m.id} musicGroup={m.musicGroup}
                                                                            key={m.id}
                                                                            removeMusic={props.removeMusic}/>);

    const newMusicElement = React.createRef();

    const changeHandler = () => {
        const text = newMusicElement.current.value;
        props.updateNewMusicText(text);
    };
    const addHandler = () => {
        props.addNewMusicGroup();
    };

    return (
        <div className={classes.musicPage}>
            <div>
                {musicPageElements}
            </div>
            <div>
                <textarea ref={newMusicElement} onChange={changeHandler} value={props.musicPage.newMusicGroup}/>
                <div>
                    <button onClick={addHandler}>Add New Song</button>
                </div>
            </div>
        </div>

    );
};

export default Music;