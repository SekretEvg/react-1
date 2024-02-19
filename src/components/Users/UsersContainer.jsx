import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance
            .get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
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
        instance
            .get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);