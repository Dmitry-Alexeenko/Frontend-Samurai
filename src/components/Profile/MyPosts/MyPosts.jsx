import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsItem = props.posts.map( p => (<Post message={p.message} like={p.likesCount}/>));
    return (
    <div>
        {props.cont}
        <div>
            New post
        </div>
        <div className={c.myPosts}>
            {postsItem}
        </div>
    </div>
    )
};

export default MyPosts; // экспортируем код в другие файлы default экспортирует все.