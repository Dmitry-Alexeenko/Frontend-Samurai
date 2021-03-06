import React from 'react';
import c from '../../../styles/DialogItem.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/user.png'


const DialogItem = (props) => {

    const {startDialog} = props;
    let {id, name, photo} = props;

    return (
        <div className={c.dialog}>
            <img src={photo ? photo : userPhoto} alt='iconUser'/>
            <div onClick={() => {startDialog(id)}}>
                <NavLink to={"/dialogs/" + id}>{name}</NavLink>
            </div>
        </div>
    )
};


export default DialogItem;