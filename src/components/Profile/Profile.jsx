import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    let {profile, status, isOwner} = props;
    let {UpdateUserStatus, savePhoto, updateProfile} = props;

    return (
        <div>
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

export default Profile;