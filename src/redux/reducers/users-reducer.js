const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
        //     isFollowed: false,
        //     fullName: 'Evgeny',
        //     status: 'I am a boss',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
        //     isFollowed: true,
        //     fullName: 'Sasha',
        //     status: 'I am a boss',
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
        //     isFollowed: false,
        //     fullName: 'Dimasik',
        //     status: 'I am a boss',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
            return state;
    }
};
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;