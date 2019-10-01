import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

    let postsData = [
        {id:1, message:"Dorow, my name is React", likesCount:1},
        {id:2, message:"It is first post", likesCount:16},
        {id:3, message:"It is thirst post", likesCount:9}
    ];

    return (
    <div>
        {props.message}
        <div>
            New post
        </div>
        <div className={c.myPosts}>
            <Post message={postsData[0].message} like={postsData[0].likesCount}/>
            <Post message={postsData[1].message} like={postsData[1].likesCount}/>
            <Post message={postsData[2].message} like={postsData[2].likesCount}/>
        </div>
    </div>
    )
}

export default MyPosts; // экспортируем код в другие файлы default экспортирует все.