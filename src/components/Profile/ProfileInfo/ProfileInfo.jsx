import React, {useState} from 'react';
import c from './ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import logo from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    let {isOwner, profile} = props;
    let {large} = props.profile.photos;
    const {savePhoto, UpdateUserStatus, updateProfile} = props;


    const selectPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        updateProfile(formData).then(() => {
            setEditMode(false)
        });



    };

    return (
        <div className={c.ProfileInfo}>

            <div className={c.ProfileInfo__avatar}>
                <img src={large
                    ? large
                    : logo} alt={"userPhoto"}/>

                {isOwner && <input type="file" accept=".jpg, .jpeg, .png" onChange={selectPhoto}/>}
            </div>

            <div className={c.ProfileInfo__UserAbout}>

                <div className={c.ProfileInfo__UserName}>
                    {props.profile.fullName}
                </div>

                <div className={c.ProfileInfo__UserData}>
                    <ProfileStatus status={props.status}
                                   UpdateUserStatus={UpdateUserStatus}/>
                </div>

                {!editMode &&
                <ProfileData profile={profile} UpdateUserStatus={UpdateUserStatus} setEditMode={setEditMode}
                             isOwner={isOwner}/>}

                {editMode && <ProfileDataForm initialValues={profile} profile={profile} setEditMode={setEditMode}
                                              onSubmit={onSubmit}/>}

            </div>


        </div>
    )
};

const ProfileData = (props) => {
    let {aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = props.profile;
    const {setEditMode, isOwner} = props;

    return (
        <div>
            {isOwner &&
            <button onClick={() => {
                setEditMode(true)
            }}>edit
            </button>
            }

            <div className={c.ProfileInfo__UserData}>
                <span className={c.UserData__item}>About:</span>
                {aboutMe ? aboutMe : "no data"}
            </div>

            <div className={c.ProfileInfo__UserData}>
                <span className={c.UserData__item}>Looking for a job:</span>
                {lookingForAJob ? "yes" : "no"}
            </div>

            <div className={c.ProfileInfo__UserData}>
                <span className={c.UserData__item}>Description:</span>
                {lookingForAJobDescription ? lookingForAJobDescription : "no data"}
            </div>

            <div className={c.ProfileInfo__UserData}>
                <span className={c.UserData__item}>Contacts:</span>

                {Object.keys(contacts).map(contact => (
                    <Contact key={contact} contactTitle={contact}
                             contactValue={contacts[contact]}
                    />)
                )}
            </div>

        </div>
    )
};

const Contact = (props) => {
    const {contactTitle, contactValue} = props;
    return (
        <div>
            <span>{contactTitle}</span> : <span>{contactValue || "no data"}</span>
        </div>
    )

};

export default ProfileInfo;