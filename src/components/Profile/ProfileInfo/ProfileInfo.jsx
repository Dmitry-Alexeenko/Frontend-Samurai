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
                    About: {props.profile.aboutMe}
                </div>
                <div className={c.ProfileInfo__UserData}>
                    Look for a job: {props.profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div className={c.ProfileInfo__UserData}>
                    Description: {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;