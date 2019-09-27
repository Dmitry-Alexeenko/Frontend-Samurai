import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './MyPosts.module.css';
import Post from './Post/Post';
const Myposts = () => {
    return (
    <div>
        My post
        <div>
            New post
        </div>
        <div className={c.myPosts}>
            <Post message="Dorow, my name is React" like="like 8"/>
            <Post message="It is first post" like="like 333"/> 
            <Post/>
        </div>
    </div>
    )
}

export default Myposts; // экспортируем код в другие файлы default экспортирует все.