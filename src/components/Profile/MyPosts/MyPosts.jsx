import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormReduxForm from "./AddPostForm";

const MyPosts = (props) => {
    let postsItem = props.profilePage.posts.map(p => (<Post message={p.message} key={p.id} like={p.likesCount}/>));

    const onSubmit = (formData) => {  //сюда придут все значения из формы
        props.addPostCreator(formData);
    };
    return (
        <div>
            <AddPostFormReduxForm onSubmit={onSubmit}/>
            <div className={c.myPosts}>
                {postsItem}
            </div>
        </div>
    )
};

export default MyPosts; // экспортируем код в другие файлы default экспортирует все.