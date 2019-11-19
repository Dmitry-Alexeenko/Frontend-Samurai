import React from 'react';
import c from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWirhHooks";
import logo from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {  //если вдруг в пропсах профиля нет, то возв Preloafer
        return <Preloader/>
    }
    return (
        <div className={c.ProfileInfo}>
            <div className={c.ProfileInfo__avatar}>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : logo}/>
            </div>
            <div className={c.ProfileInfo__UserAbout}>
                <div className={c.ProfileInfo__UserName}>
                    {props.profile.fullName}
                </div>
                <div className={c.ProfileInfo__UserData}>
                    <ProfileStatusWithHooks status={props.status}
                                            UpdateUserStatusThunkCreator={props.UpdateUserStatusThunkCreator}/>
                </div>
                <div className={c.ProfileInfo__UserData}>
                    <span className={c.UserData__item}>About:</span> {props.profile.aboutMe
                    ? props.profile.aboutMe
                    : "no data"}
                </div>
                <div className={c.ProfileInfo__UserData}>
                    <span className={c.UserData__item}>Look for a job:</span> {props.profile.lookingForAJob
                    ? "yes"
                    : "no"}
                </div>
                <div className={c.ProfileInfo__UserData}>
                    <span className={c.UserData__item}>Description:</span> {props.profile.lookingForAJobDescription
                    ? props.profile.lookingForAJobDescription
                    : "no data"}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;