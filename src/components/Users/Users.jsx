import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => (
                    <span
                        key={page}
                        onClick={(e) => {
                            props.onPageChanged(page)
                        }}
                        className={props.currentPage === page ? classes.selectedPage : classes.paginataion}>
                            {page}
                        </span>)
                )}
            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"
                                 className={classes.userPhoto}/>
                         </NavLink>
                    </div>
                    <div>
                        {user.isFollowed ?
                            <button onClick={() => {
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
                                        },
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                            }}>Follow</button>}
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

export default Users;