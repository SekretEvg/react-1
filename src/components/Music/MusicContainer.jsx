import React from "react";
import {addNewMusicCreator, removeMusicCreator, updateNewMusicTextCreator} from "../../redux/reducers/music-reducer";
import Music from "./Music";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMusicText: (text) => dispatch(updateNewMusicTextCreator(text)),
        addNewMusic: () => dispatch(addNewMusicCreator()),
        removeMusic: (id) => dispatch(removeMusicCreator(id)),
    }
};

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;