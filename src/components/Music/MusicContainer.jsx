import React from "react";
import {addNewMusicCreator, removeMusicCreator, updateNewMusicTextCreator} from "../../redux/reducers/music-reducer";
import Music from "./Music";

const MusicContainer = (props) => {
    const state = props.store.getState().musicPage;

    const changeHandler = (text) => {
        props.store.dispatch(updateNewMusicTextCreator(text));
    };
    const addHandler = () => {
        props.store.dispatch(addNewMusicCreator());
    };

    const removeMusic = (id) => {
        props.store.dispatch(removeMusicCreator(id))
    };

    return (
        <Music updateNewMusicText={changeHandler} addNewMusic={addHandler} removeMusic={removeMusic} musicPage={state}/>
    );
};

export default MusicContainer;