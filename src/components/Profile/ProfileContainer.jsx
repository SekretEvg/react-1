import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance
            .get(`profile/${userId}`)
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

function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} location={location} navigate={navigate} params={params}/>
        );
    };
    return ComponentWithRouterProp;
};
const WithUrlDataContainerComponent = WithRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);