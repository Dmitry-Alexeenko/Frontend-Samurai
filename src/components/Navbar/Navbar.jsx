import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {Menu} from 'antd';
import {
    MailOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    ExperimentOutlined,
    CustomerServiceOutlined,
    UserOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';


const NavBar = (props) => {

    let location = useLocation().pathname;

    let isOpenMenu = '';
    if (location === "/algorithms") {
        isOpenMenu = 'sub1'
    }
    const {SubMenu} = Menu;

    return (

        <Menu selectedKeys={[location]} mode="inline" theme="light" defaultOpenKeys={[isOpenMenu]}>

            <Menu.Item key="/profile">
                <UserOutlined/>
                <Link to="/profile">Профиль</Link>
            </Menu.Item>

            <Menu.Item key="/dialogs">
                <MailOutlined/>
                <Link to="/dialogs">Сообщения</Link>
            </Menu.Item>

            <Menu.Item key="/users">
                <UsergroupAddOutlined/>
                <Link to="/users">Пользователи</Link>
            </Menu.Item>

            <Menu.Item key="/news">
                <ExperimentOutlined/>
                <Link to="/news">Новости</Link>
            </Menu.Item>

            <Menu.Item key="/music">
                <CustomerServiceOutlined/>
                <Link to="/music">Музыка</Link>
            </Menu.Item>

            <Menu.Item key="/settings">
                <SettingOutlined/>
                <Link to="/settings">Настрийки</Link>
            </Menu.Item>

            <SubMenu key="sub1" title={
                <span>
                            <ExperimentOutlined/>
                            <span>База знаний</span>
                    </span>
            }>
                <Menu.Item key="/algorithms">
                    <Link to="/algorithms">Алгоритмы</Link>
                </Menu.Item>

            </SubMenu>
        </Menu>

    )
};

export default NavBar;