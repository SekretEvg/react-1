import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import dogImage from '../../../assets/images/dog.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"*/}
                {/*    alt="main content image"/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.image} src={props.profile.photos.large || dogImage}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <p>Обо мне: {props.profile.aboutMe}</p>
                <ul>Мои контакты:
                    <li><a href="#">{props.profile.contacts.facebook}</a></li>
                    <li><a href="#">{props.profile.contacts.github}</a></li>
                    <li><a href="#">{props.profile.contacts.instagram}</a></li>
                    <li><a href="#">{props.profile.contacts.twitter}</a></li>
                    <li><a href="#">{props.profile.contacts.vk}</a></li>
                </ul>
                <p>В поисках работы: {
                    props.profile.lookingForAJob
                        ? <span>&#128512;</span>
                        :
                        <span>&#128565;</span>}
                </p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;