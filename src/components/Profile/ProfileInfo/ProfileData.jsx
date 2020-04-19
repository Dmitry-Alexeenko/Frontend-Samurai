import React from 'react';
import styles from '../../../styles/ProfileInfo.module.scss';
import EditBtn from "../../atoms/EditBtn";
import {SnippetsOutlined  } from "@ant-design/icons";

const ProfileData = (props) => {

    let {aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = props.profile;
    const {setEditMode, isOwner} = props;

    let contactsItemsFilter = Object.keys(contacts).filter(contact => contacts[contact]);
    let contactsItems = contactsItemsFilter.map(contact => {
            if (contacts[contact]) {
                return <Contact key={contact} contactTitle={contact}
                                contactValue={contacts[contact]}
                />
            }
        }
    );

    console.log(contactsItems)

    return (
        <div>
            {isOwner && <EditBtn setEditMode={setEditMode}> Редактировать </EditBtn>}

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Ищу работу:</span>
                <span>{lookingForAJob ? "Да" : "Нет"}</span>

            </div>

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Обо мне:</span>
                <span> {aboutMe ? aboutMe : "Нет данных"}</span>

            </div>

            <div className={styles.ProfileInfo__UserData}>
                <span className={styles.UserData__item}>Навыки:</span>
                <span>{lookingForAJobDescription ? lookingForAJobDescription : "Нет данных"}</span>
            </div>

            {
                contactsItems.length > 0 &&
                <div className={styles.ProfileInfo__UserData}>
                    <span className={styles.UserData__item}>Контакты:</span>
                    <div>
                        {contactsItems}
                    </div>
                </div>
            }

        </div>
    )
};

const Contact = (props) => {

    const {contactTitle, contactValue} = props;

    return (
        <div className={styles.Contact}>
            <SnippetsOutlined  />
            <a href={contactValue} target="_blank" className={styles.Contact__Link}>{contactValue}</a>
        </div>
    )

};

export default ProfileData;