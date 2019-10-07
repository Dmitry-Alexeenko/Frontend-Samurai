import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, changeTextCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {
    let postsItem = props.state.posts.map( p => (<Post message={p.message} like={p.likesCount}/>));

    let newPostElement = React.createRef();  //реакт создает ссылку

    let addNewPost = () => {
       props.dispatch(addPostCreator());
    };
    let changeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(changeTextCreator(text));
    };
    return (
    <div>
        {props.cont}
        <div>
            <div>
                <textarea onChange={changeText} ref={newPostElement} value={props.state.textNewPost} placeholder="Enter your post"/>
            </div>
            <div>
                <button onClick={addNewPost}>Add post</button> {/*//когда мы сами не выхываем функцию, а отдаем ее онклику и т.д, эта функц наз Колбэк !!!Отдаем без скобок */}
            </div>
        </div>
        <div className={c.myPosts}>
            {postsItem}
        </div>
    </div>
    )
};

export default MyPosts; // экспортируем код в другие файлы default экспортирует все.