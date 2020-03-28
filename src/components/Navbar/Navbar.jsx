import React from 'react';
import c from '../../styles/Navbar.module.scss';
import {NavLink} from "react-router-dom";
import FriendsSiteBar from "./FriendsSiteBar/FriendsSiteBar";
import {Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Navbar = (props) => {
    /*let friendsItems = props.state.user.map((u) => (<FriendsSiteBar name={u.name} key={u.id} id={u.id}/>));*/
    const {SubMenu} = Menu;
    return (
        <nav className={c.navBar}>
            <div className={c.navBar__item}>
                <NavLink to="/profile"
                         activeClassName={c.active}>Профиль</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/dialogs" activeClassName={c.active}>Сообщения</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/users" activeClassName={c.active}>Пользователи</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/news" activeClassName={c.active}>Новости</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/music" activeClassName={c.active}>Музыка</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/settings" activeClassName={c.active}>Настрийки</NavLink>
            </div>
            <div className={c.navBar__item}>
                <NavLink to="/education" activeClassName={c.active}>База знаний</NavLink>
            </div>
            {/*<div className={c.navBar__friends}>
                <h3> Friends </h3>
                <div className={c.navBar__friendsItems}>
                    {friendsItems}
                </div>
            </div>*/}
            <Menu
                defaultSelectedKeys={['1']}
                //defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
            >
                <Menu.Item key="1"><NavLink to="/profile" activeClassName={c.active}>Профиль</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/dialogs" activeClassName={c.active}    >Сообщения</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/users" activeClassName={c.active}>Пользователи</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to="/settings" activeClassName={c.active}>Настрийки</NavLink></Menu.Item>

                <SubMenu key="sub1" title={
                    <span>
                            <MailOutlined/>
                            <span>База знаний</span>
                    </span>
                }
                >
                    <Menu.Item key="5">Алгоритмы</Menu.Item>
                    <Menu.Item key="6">Пусто</Menu.Item>
                    <Menu.Item key="7">Пусто</Menu.Item>
                    <Menu.Item key="8">Пусто</Menu.Item>

                </SubMenu>
            </Menu>
        </nav>
    )
};

export default Navbar;