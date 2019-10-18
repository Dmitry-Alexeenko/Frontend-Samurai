import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './Header.module.css';
import {NavLink} from "react-router-dom"; // подкл стили; теперь это объект
const Header = (props) => {
    return (
        <header className={c.wrapper}>
            <img src="https://im0-tub-ru.yandex.net/i?id=2f39626df22133cefe36a721bd92313f&n=13&exp=1"/>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={"/Login"}>login</NavLink>}
            </div>

        </header>
    )
};

export default Header; // экспортируем код в другие файлы default экспортирует все.