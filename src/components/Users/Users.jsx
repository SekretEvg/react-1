import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import {FollowAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/reducers/users-reducer";

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
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id);
                                FollowAPI.unfollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                })
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id);
                                FollowAPI.follow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id);
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