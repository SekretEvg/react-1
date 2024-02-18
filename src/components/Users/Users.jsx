import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {
    componentDidMount() {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance.get(`users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                this.onPageChanged(page)
                            }}
                            className={this.props.currentPage === page ? classes.selectedPage : classes.paginataion}>
                            {page}
                        </span>)
                    )}
                </div>
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