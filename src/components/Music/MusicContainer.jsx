import React from "react";
import {addNewMusicCreator, removeMusicCreator, updateNewMusicTextCreator} from "../../redux/reducers/music-reducer";
import Music from "./Music";
import StoreContext from "../../StoreContext";

const MusicContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().musicPage;

                    const changeHandler = (text) => {
                        store.dispatch(updateNewMusicTextCreator(text));
                    };
                    const addHandler = () => {
                        store.dispatch(addNewMusicCreator());
                    };

                    const removeMusic = (id) => {
                        store.dispatch(removeMusicCreator(id))
                    };

                    return <Music updateNewMusicText={changeHandler} addNewMusic={addHandler} removeMusic={removeMusic}
                                  musicPage={state}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default MusicContainer;