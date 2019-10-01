import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts message="it is my posts"/>
        </div>
    )
}

export default Profile; // экспортируем код в другие файлы default экспортирует все.