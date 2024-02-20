import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance
            .get('profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);