import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Profile.module.css';
import Myposts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={c.wrapper}>
            <div>
                <img src="https://s1.1zoom.me/b5050/925/241768-Sepik_2048x1152.jpg"></img>
            </div>
            <div>
                ava + description
            </div>
            <Myposts message="it is myee posts"/>
        </div>
    )
}

export default Profile; // экспортируем код в другие файлы default экспортирует все.