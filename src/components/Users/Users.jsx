import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';


const Users = (props) => {
    const getUsers = () => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        if (props.users.length === 0) {
            instance.get('users').then(response => props.setUsers(response.data.items));
        }
    };


    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"
                             className={classes.userPhoto}/>
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
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;