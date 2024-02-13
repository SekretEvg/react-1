const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC';
const UPDATE_NEW_MUSIC_TEXT = 'UPDATE_NEW_MUSIC_TEXT';
const REMOVE_MUSIC = 'REMOVE_MUSIC';

const musicReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MUSIC:
            const newMusicGroup = {
                id: 5, musicGroup: state.newMusicGroup,
            };
            state.musicList.push(newMusicGroup);
            state.newMusicGroup = '';
            break;
        case UPDATE_NEW_MUSIC_TEXT:
            state.newMusicGroup = action.newMusicText;
            break;
        case REMOVE_MUSIC:
            state.musicList = state.musicList.filter(m => m.id !== action.id);
            break;
        default:
            return state;
    }
    return state;
};

export const addNewMusicCreator = () => ({type: ADD_NEW_MUSIC});
export const updateNewMusicTextCreator = (newMusicText) => ({type: UPDATE_NEW_MUSIC_TEXT, newMusicText: newMusicText});
export const removeMusicCreator = (id) => ({type: REMOVE_MUSIC, id: id});

export default musicReducer;