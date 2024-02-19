import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

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
}

export default Users;