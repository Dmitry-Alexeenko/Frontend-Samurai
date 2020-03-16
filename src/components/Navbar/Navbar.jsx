import React from 'react';
import c from '../../styles/Navbar.module.scss';
import {NavLink} from "react-router-dom";
import FriendsSiteBar from "./FriendsSiteBar/FriendsSiteBar";

const Navbar = (props) => {
    /*let friendsItems = props.state.user.map((u) => (<FriendsSiteBar name={u.name} key={u.id} id={u.id}/>));*/
    return (
        <nav className={c.navBar}>
            <div className={c.navBar__item}>
                <NavLink to="/profile"
                         activeClassName={c.active}>Profile</NavLink> {/* activeC.N. с помошью этого мы добавл класс для активных ссылок*/}
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/dialogs" activeClassName={c.active}>Message</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/users" activeClassName={c.active}>Users</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>
            {/*<div className={c.navBar__friends}>
                <h3> Friends </h3>
                <div className={c.navBar__friendsItems}>
                    {friendsItems}
                </div>
            </div>*/}
        </nav>
    )
};

export default Navbar;