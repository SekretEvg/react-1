import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
                isFollowed: false,
                fullName: 'Evgeny',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
                isFollowed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'New-York', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg/220px-%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.jpg',
                isFollowed: false,
                fullName: 'Dimasik',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt="avatar" className={classes.userPhoto}/>
                    </div>
                    <div>
                        {user.isFollowed ?
                            <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Follow</button>
                            :
                            <button onClick={() => {
                                props.follow(user.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;