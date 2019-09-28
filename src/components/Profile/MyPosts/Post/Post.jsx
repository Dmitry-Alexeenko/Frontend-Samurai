import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Post.module.css';
const Post = (props) => { //этот пропс берется из файла Myposts
    return (
        <div className={c.item}> 
            <img src="http://s1.bwallpapers.com/wallpapers/2014/08/06/jake-sully-avatar-disguise_084518772.jpg"></img>
                {props.message} 
            <div>
                like {props.like} 
            </div>
        </div>
    )
}

export default Post; // экспортируем код в другие файлы default экспортирует все.