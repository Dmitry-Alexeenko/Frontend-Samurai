import React, {useState} from 'react';
import styles from '../../../styles/ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import logo from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import {createUseStyles} from "react-jss";
import LoadBtn from "../../atoms/LoadBtn";


const ProfileInfo = (props) => {

    const classes = useStyles();
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    let {isOwner, profile, status} = props;
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
        <div className={classes.ProfileInfo}>
            <div className={classes.ProfileInfo__Avatar}>
                <img src={large ? large : logo} alt={"userPhoto"}/>
                {isOwner && <LoadBtn selectPhoto={selectPhoto}/>}
            </div>

            <div className={classes.ProfileInfo__UserAbout}>

                <div className={classes.ProfileInfo__UserName}>
                    {profile.fullName}
                </div>

                <div className={styles.ProfileInfo__UserData}>
                    <ProfileStatus status={status}
                                   UpdateUserStatus={UpdateUserStatus}/>
                </div>

                {!editMode && <ProfileData profile={profile} setEditMode={setEditMode} isOwner={isOwner}/>}
                {editMode && <ProfileDataForm initialValues={profile} profile={profile} setEditMode={setEditMode}
                                              onSubmit={onSubmit}/>}
            </div>

        </div>
    )
};

const useStyles = createUseStyles({
    ProfileInfo: {
        transition: '0.1s all',
        display: 'flex',
    },
    ProfileInfo__Avatar: {
        width: 180,
        padding: 17,
        backgroundColor: '#001c38',
        borderRadius: 4,
        '& img': {
            width: '100%',
            borderRadius: 2,
            borderStyle: 'none',
        }
    },
    ProfileInfo__UserAbout: {
        marginLeft: 15,
        backgroundColor: '#001c38',
        padding: 17,
        flexGrow: 1,
        borderRadius: 4,
    },
    ProfileInfo__UserName: {
        fontSize: 20,
    },

});

export default ProfileInfo;