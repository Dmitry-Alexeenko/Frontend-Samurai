import React from 'react';
import {NavLink} from "react-router-dom";
import {
    MailOutlined, SettingOutlined, UsergroupAddOutlined, ExperimentOutlined, CustomerServiceOutlined, UserOutlined
} from '@ant-design/icons';
import {createUseStyles, useTheme} from "react-jss";


const NavBar = (props) => {
    const theme = useTheme();
    const classes = useStyles({...props, theme});

    const {screenWidth}  = theme;

    return (
        <nav className={classes.NavBar}>
            <div>
                <NavLink to="/profile" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <UserOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Профиль</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <MailOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Сообщения</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/users" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <UsergroupAddOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Пользователи</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <ExperimentOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Новости</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <CustomerServiceOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Музыка</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <SettingOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}>Настрийки</span>}
                </NavLink>
            </div>
            <div>
                <NavLink to="/education" className={classes.NavBar__Link} activeClassName={classes.active}>
                    <ExperimentOutlined/>
                    {screenWidth !== 'xs' && <span className={classes.NavBar__Title}> База знаний</span>}
                </NavLink>
            </div>
        </nav>
    )
};

const useStyles = createUseStyles({
    NavBar: {
        marginTop: 15,
        width: ({theme}) => theme.screenWidth !== 'xs' ? '170px' : '70px',
        position: 'fixed',
        top: 40,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        transition: '0.1s all'
    },
    NavBar__Link: {
        display: 'block',
        padding: '8px 10px',
        color: '#b2b2b2',
        textDecoration: 'none',
        textAlign: ({theme}) => theme.screenWidth !== 'xs' ? 'left' : 'center',
        '&:hover': {
            color: 'white'
        }
    },
    active: {
        backgroundColor: '#1890ff'
    },
    NavBar__Title: {
        paddingLeft: '8px',
    },
});

export default NavBar;