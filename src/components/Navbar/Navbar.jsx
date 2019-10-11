import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsSiteBar from "./FriendsSiteBar/FriendsSiteBar"; // подкл стили; теперь это объект


const Navbar = (props) => { //{classes.item} - это ключ объекта classes
//(let c = c1+" "+c2)<--сложение с1 и с2 || замена (шаблонная строка ecmascript 6)--> (let c = `${c1} ${c2}`)

    let fliendsItems = props.state.user.map((u) => (<FriendsSiteBar name={u.name} key={u.id} id={u.id}/>));

    return (
        <nav className={c.nav}>
            <div className={c.item}> 
                <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink> {/* activeC.N. с помошью этого мы добавл класс для активных ссылок*/}
            </div>
            <div className= {`${c.item} ${c.active}`} > 
                <NavLink to="/dialogs" activeClassName={c.active}>Message</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}> 
                <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>
            <div className={c.friends}>
                <h3> Friends </h3>
                <div className={c.friendsItems}>
                    {fliendsItems}

                </div>
            </div>
        </nav>
    )
};

export default Navbar; // экспортируем код в другие файлы default экспортирует все.