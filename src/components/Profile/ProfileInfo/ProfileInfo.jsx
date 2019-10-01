import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={c.wrapper}>
            <div>
                <img src="https://s1.1zoom.me/b5050/925/241768-Sepik_2048x1152.jpg"></img>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo; // экспортируем код в другие файлы default экспортирует все.