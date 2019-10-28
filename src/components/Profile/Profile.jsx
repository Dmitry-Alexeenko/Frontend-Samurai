import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div >
            <ProfileInfo profile={props.profile} status={props.status}  UpdateUserStatusThunkCreator={props.UpdateUserStatusThunkCreator}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile; // экспортируем код в другие файлы default экспортирует все.