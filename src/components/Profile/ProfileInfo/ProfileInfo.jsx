import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import logo from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import {createUseStyles, useTheme} from "react-jss";
import LoadBtn from "../../atoms/LoadBtn";


const ProfileInfo = (props) => {

    const theme = useTheme();
    const classes = useStyles({theme});
    const [editMode, setEditMode] = useState(false);

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
                {isOwner && <LoadBtn selectPhoto={selectPhoto}> Изменить фото </LoadBtn>}
            </div>

            <div className={classes.ProfileInfo__UserAbout}>

                <div className={classes.ProfileInfo__UserName}>
                    {profile.fullName}
                </div>

                <div>
                    <ProfileStatus status={status} UpdateUserStatus={UpdateUserStatus}/>
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
        flexDirection: ({theme}) => theme.screenWidth !== 'sm' && theme.screenWidth !== 'xs' ? 'row' : 'column',
        alignItems: 'flex-start',
    },
    ProfileInfo__Avatar: {
        flexShrink:0,
        width: 180,
        padding: 15,
        backgroundColor: '#001c38',
        borderRadius: 4,
        marginRight: 15,
        marginBottom: 15,
        '& img': {
            width: '100%',
            borderRadius: 2,
            borderStyle: 'none',
        }
    },
    ProfileInfo__UserAbout: {

        backgroundColor: '#001c38',
        padding: 15,
        flexGrow: 1,
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: 4,
    },
    ProfileInfo__UserName: {
        fontSize: 20,
    },

});

export default ProfileInfo;