import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import {addPostCreator, changeTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addNewPost = () => {
       props.dispatch(addPostCreator());
    };

    let changeText = (text) => {
        props.dispatch(changeTextCreator(text));
    };
    return (<MyPosts updateNewPostText={changeText} addPost={addNewPost} state ={props.state}/>)
};

export default MyPostsContainer;