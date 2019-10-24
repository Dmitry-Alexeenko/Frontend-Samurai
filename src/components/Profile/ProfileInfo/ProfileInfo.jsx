import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {  //если вдруг профиля нет, то мы возв Preloader
        return <Preloader/>
    }
    return (
        <div className={c.wrapper}>

            <div className={c.title}></div>
            <div>
                <div>
                    name {props.profile.fullName}
                </div>
                <div className={c.avatar}>
                    <img src={props.profile.photos.large}
                         alt=""/> {/*потом когда будет перезагрузка и профиль придет, тогда отобразим*/}
                    <ProfileStatus status={"normmmm"}/>
                </div>
                <div>
                    <div>About: {props.profile.aboutMe}</div>
                    <div>Look for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                    <div>Description: {props.profile.lookingForAJobDescription}</div>


                </div>
            </div>
        </div>
    )
}

export default ProfileInfo; // экспортируем код в другие файлы default экспортирует все.