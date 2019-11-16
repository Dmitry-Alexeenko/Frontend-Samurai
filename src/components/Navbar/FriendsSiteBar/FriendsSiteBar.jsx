import React from 'react';
import c from './FriendsSiteBar.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/user.png";

const FriendsSiteBar = (props) => {
    return (
        <div className={c.friendsItem}>
            <img src={logo}/>
            <NavLink to="/dialogs/" activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
};

export default FriendsSiteBar;