import React from 'react';
import c from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={c.dialog}>
            <img src="https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d"></img>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;