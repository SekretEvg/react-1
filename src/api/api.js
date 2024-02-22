import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
};

export const FollowAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
};

export const AuthAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    }
};

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
};