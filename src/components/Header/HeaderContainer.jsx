import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "9631b5f1-e72b-461c-9bbc-c43d01a62477"
            }
        });
        instance
            .get('auth/me')
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);