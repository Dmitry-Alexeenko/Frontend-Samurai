import React from 'react';
import c from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/user.png'

const DialogItem = (props) => {

    let {id, name} = props;

    return (
        <div className={c.dialog}>
            <img src={userPhoto} alt='iconUser'/>
            <NavLink to={"/dialogs/" + id}>{name}</NavLink>
        </div>
    )
};


export default DialogItem;