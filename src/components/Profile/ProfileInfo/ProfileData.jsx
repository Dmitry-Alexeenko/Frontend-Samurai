import React from 'react';
import styles from '../../../styles/ProfileInfo.module.scss';



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

export default ProfileData;