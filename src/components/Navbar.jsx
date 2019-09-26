import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы

const Navbar = () => {
    return (
        <nav className="app-wrapper__nav">
            <div>
            <a href="#">Profile</a>
            </div>
            <div>
            <a href="#">Message</a>
            </div>
            <div>
            <a href="#">News</a>
            </div>
            <div>
            <a href="#">Music</a>
            </div>
            <div>
            <a href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar; // экспортируем код в другие файлы default экспортирует все.