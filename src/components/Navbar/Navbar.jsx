import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Navbar.module.css'; // подкл стили; теперь это объект
const Navbar = () => { //{classes.item} - это ключ объекта classes
//(let c = c1+" "+c2)<--сложение с1 и с2 || замена (шаблонная строка ecmascript 6)--> (let c = `${c1} ${c2}`)

    return (
        <nav className={c.nav}>
            <div className={c.item}> 
                <a href="#">Profile</a>
            </div>
            <div className= {`${c.item} ${c.active}`} > 
                <a href="#">Message</a>
            </div>
            <div className={c.item}>
                <a href="#">News</a>
            </div>
            <div className={c.item}>
                <a href="#">Music</a>
            </div>
            <div className={c.item}> 
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar; // экспортируем код в другие файлы default экспортирует все.