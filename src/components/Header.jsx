import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы

const Header = () => {
    return (
        <header className="app-wrapper__header">
            <img src="https://im0-tub-ru.yandex.net/i?id=2f39626df22133cefe36a721bd92313f&n=13&exp=1"></img>
        </header>
    )
}

export default Header; // экспортируем код в другие файлы default экспортирует все.