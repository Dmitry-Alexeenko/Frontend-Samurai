import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './Header.module.scss';
import {NavLink} from "react-router-dom"; // подкл стили; теперь это объект
import userPhoto from "../../assets/images/user.png";
import logo from "../../assets/images/logo.svg";

const Header = (props) => {

    let {logout} = props;
    let {photo, login, isAuth} = props;

    return (
        <header className={c.header_container}>
            <div className={c.header__content}>
                <div className={c.header__logoData}>
                    <img className={c.header__logo} src={logo}  alt="logo"/>
                    <span className={c.header__name}>Social network</span>
                </div>
                <div className={c.header__UserDara}>
                    {isAuth
                        ? <div className={c.header__select}>
                            {login}
                            <img className={c.header__UserPhoto} src={photo != null ? photo : userPhoto} alt="userPhoto"/>
                            <button className={c.header__btn} onClick={logout}>Log out</button>
                        </div>
                        : <NavLink className={c.header__btn} to={"/Login"}>Log in</NavLink>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;