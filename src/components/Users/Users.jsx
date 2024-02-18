import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {
    constructor(props) {
        super(props);
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance.get('users').then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"
                             className={classes.userPhoto}/>
                    </div>
                    <div>
                        {user.isFollowed ?
                            <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Follow</button>
                            :
                            <button onClick={() => {
                                this.props.follow(user.id)
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
    }
};

export default Users;