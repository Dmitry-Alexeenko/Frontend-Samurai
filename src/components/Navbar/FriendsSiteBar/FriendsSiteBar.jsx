import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './FriendsSiteBar.module.css';
import {NavLink} from "react-router-dom"; // подкл стили; теперь это объект

const FriendsSiteBar = (props) => {
    return (
        <div className={c.friendsItem}>
            <img src="https://pbs.twimg.com/media/DZegJVEVMAUiUMq.jpg"></img>
            <NavLink to="/dialogs/" activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
};


export default FriendsSiteBar; // экспортируем код в другие файлы default экспортирует все.