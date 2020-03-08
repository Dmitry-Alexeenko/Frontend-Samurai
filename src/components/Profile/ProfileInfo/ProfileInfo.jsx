import React from 'react';
import c from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWirhHooks";
import logo from "../../../assets/images/user.png";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    let {isOwner} = props;
    let {aboutMe, lookingForAJob, lookingForAJobDescription, photos} = props.profile;
    const {savePhoto} = props;

    const selectPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={c.ProfileInfo}>

            <div className={c.ProfileInfo__avatar}>
                <img src={photos.large
                    ? photos.large
                    : logo} alt={"userPhoto"}/>

                {isOwner && <input type="file" accept=".jpg, .jpeg, .png" onChange={selectPhoto}/>}
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
                    <span className={c.UserData__item}>About:</span>
                    {aboutMe ? aboutMe : "no data"}
                </div>

                <div className={c.ProfileInfo__UserData}>
                    <span className={c.UserData__item}>Look for a job:</span>
                    {lookingForAJob ? "yes" : "no"}
                </div>

                <div className={c.ProfileInfo__UserData}>
                    <span className={c.UserData__item}>Description:</span>
                    {lookingForAJobDescription ? lookingForAJobDescription : "no data"}
                </div>

            </div>

        </div>
    )
};

export default ProfileInfo;