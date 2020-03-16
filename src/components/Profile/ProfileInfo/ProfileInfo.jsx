import React, {useState} from 'react';
import styles from '../../../styles/ProfileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import logo from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

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
        <div className={styles.ProfileInfo}>

            <div className={styles.ProfileInfo__avatar}>
                <img src={large
                    ? large
                    : logo} alt={"userPhoto"}/>

                {isOwner &&
                <div>
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={selectPhoto}
                           name={"file"} id={"file"} className={styles.ProfileInfo__loadPhoto}/>
                    < label htmlFor="file">Изменить фото</label>
                </div>
                }
            </div>

            <div className={styles.ProfileInfo__UserAbout}>

                <div className={styles.ProfileInfo__UserName}>
                    {profile.fullName}
                </div>

                <div className={styles.ProfileInfo__UserData}>
                    <ProfileStatus status={status}
                                   UpdateUserStatus={UpdateUserStatus}/>
                </div>

                {!editMode &&
                <ProfileData profile={profile} UpdateUserStatus={UpdateUserStatus} setEditMode={setEditMode}
                             isOwner={isOwner}/>}

                {editMode && <ProfileDataForm initialValues={profile} profile={profile} setEditMode={setEditMode}
                                              onSubmit={onSubmit}/>}
            </div>

        </div>
    )
};

const ProfileData = (props) => {

    let {aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = props.profile;
    const {setEditMode, isOwner} = props;

    let contactsItems = Object.keys(contacts).map(contact => {
            if (contacts[contact]) {
                return <Contact key={contact} contactTitle={contact}
                                contactValue={contacts[contact]}
                />
            }
        }
    );

    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={() => {
                    setEditMode(true)
                }}>Редактировать
                </button>
            </div>
            }

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Обо мне:</span>
                {aboutMe ? aboutMe : "no data"}
            </div>

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Ищу работу:</span>
                {lookingForAJob ? "Да" : "Нет"}
            </div>

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Описание:</span>
                {lookingForAJobDescription ? lookingForAJobDescription : "Нет данных"}
            </div>

            {
                contactsItems.length > 0 &&
                <div className={styles.ProfileInfo__UserData}>
                    <span className={styles.UserData__item}>Контакты:</span>
                    {contactsItems}
                </div>
            }

        </div>
    )
};

const Contact = (props) => {

    const {contactTitle, contactValue} = props;

    return (
        <div>
            <span>{contactTitle}</span> : <span>{contactValue || "Нет данных"}</span>
        </div>
    )

};

export default ProfileInfo;