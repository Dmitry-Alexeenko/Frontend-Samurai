import React from 'react';
import c from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    let {profile, status, isOwner} = props;
    let {UpdateUserStatusThunkCreator, savePhoto} = props;

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         UpdateUserStatusThunkCreator={UpdateUserStatusThunkCreator}
                         isOwner={isOwner}
                         savePhoto={savePhoto}/>

            <MyPostsContainer/>
            {/*MyPostsContainer будет каждый раз перерисовываться без нужной на то причины только из за того,что  в
            ProfileContainer приходт новые пропсы и эта компонента перерисовывается, а так как MyPostsContainer сидит в
            ProfileContainer то и она тоже перерисуется, хотя в нее пропсы даже не приходят*/}
        </div>
    )
};

export default Profile;