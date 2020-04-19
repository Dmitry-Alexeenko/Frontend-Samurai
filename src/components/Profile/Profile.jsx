import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {createUseStyles} from "react-jss";

const Profile = (props) => {
    const classes = useStyles();
    let {profile, status, isOwner} = props;
    let {UpdateUserStatus, savePhoto, updateProfile} = props;

    return (
        <div className={classes.Profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         UpdateUserStatus={UpdateUserStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         updateProfile={updateProfile}/>

            <MyPostsContainer/>
        </div>
    )
};

const useStyles = createUseStyles({
    Profile: {
        marginTop: 40,
        padding: '15px',
    },

});

export default Profile;