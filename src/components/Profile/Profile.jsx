import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile; // экспортируем код в другие файлы default экспортирует все.