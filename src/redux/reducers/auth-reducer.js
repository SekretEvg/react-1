import {AuthAPI} from "../../api/api";

const SET_USER_DATE = 'SET_USER_DATE';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATE, data: {userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me().then(data => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
};

export default authReducer;