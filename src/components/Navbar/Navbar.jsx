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

        <Menu selectedKeys={[location]} mode="inline" theme="dark" defaultOpenKeys={[isOpenMenu]}>

            <Menu.Item key="/profile">
                <UserOutlined/>
                <span>Профиль</span>
                <Link to="/profile"/>
            </Menu.Item>

            <Menu.Item key="/dialogs">
                <MailOutlined/>
                <span>Сообщения</span>
                <Link to="/dialogs"/>
            </Menu.Item>

            <Menu.Item key="/users">
                <UsergroupAddOutlined/>
                <span>Пользователи</span>
                <Link to="/users"/>
            </Menu.Item>

            <Menu.Item key="/news">
                <ExperimentOutlined/>
                <span>Новости</span>
                <Link to="/news"/>
            </Menu.Item>

            <Menu.Item key="/music">
                <CustomerServiceOutlined/>
                <span>Музыка</span>
               <Link to="/music"/>
            </Menu.Item>

            <Menu.Item key="/settings">
                <SettingOutlined/>
                <span>Настрийки</span>
                <Link to="/settings"/>
            </Menu.Item>

            <SubMenu key="sub1" title={
                <span>
                            <ExperimentOutlined/>
                            <span>База знаний</span>
                    </span>
            }>
                <Menu.Item key="/algorithms">
                    <span>Алгоритмы</span>
                    <Link to="/algorithms"/>
                </Menu.Item>

            </SubMenu>
        </Menu>

    )
};

export default NavBar;