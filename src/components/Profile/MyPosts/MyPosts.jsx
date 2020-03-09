import React from 'react';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import AddPostFormReduxForm from "./AddPostForm";

const MyPosts = React.memo((props) => {
    let items = props.posts.map(p => (
        <Post message={p.message} key={p.id} like={p.likesCount}/>)
    );
    const onSubmit = (formData) => {
        props.addPostCreator(formData);
    };
    return (
        <div>
            <AddPostFormReduxForm onSubmit={onSubmit}/>
            <div className={c.myPosts}>
                {items.reverse()}
            </div>
        </div>
    )
});

export default MyPosts;