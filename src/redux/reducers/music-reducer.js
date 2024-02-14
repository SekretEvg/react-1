const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC';
const UPDATE_NEW_MUSIC_TEXT = 'UPDATE_NEW_MUSIC_TEXT';
const REMOVE_MUSIC = 'REMOVE_MUSIC';

const initialState = {
    musicList: [
        {id: 1, musicGroup: 'Sia'},
        {id: 2, musicGroup: 'One Republic'},
        {id: 3, musicGroup: 'Noize MC'},
        {id: 4, musicGroup: 'Queen'},
    ],
    newMusicGroup: '',
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MUSIC: {
            const newMusicGroup = {
                id: 5, musicGroup: state.newMusicGroup,
            };
            const stateCopy = {...state};
            stateCopy.musicList = [...state.musicList];
            stateCopy.musicList.push(newMusicGroup);
            stateCopy.newMusicGroup = '';
            return stateCopy;
        }
        case UPDATE_NEW_MUSIC_TEXT: {
            const stateCopy = {...state};
            stateCopy.newMusicGroup = action.newMusicText;
            return stateCopy;
        }
        case REMOVE_MUSIC: {
            const stateCopy = {...state, musicList: [...state.musicList]};
            stateCopy.musicList = stateCopy.musicList.filter(m => m.id !== action.id);
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addNewMusicCreator = () => ({type: ADD_NEW_MUSIC});
export const updateNewMusicTextCreator = (newMusicText) => ({type: UPDATE_NEW_MUSIC_TEXT, newMusicText: newMusicText});
export const removeMusicCreator = (id) => ({type: REMOVE_MUSIC, id: id});

export default musicReducer;