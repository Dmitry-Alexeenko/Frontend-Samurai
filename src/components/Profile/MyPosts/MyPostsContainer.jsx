import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import {addPostCreator, changeTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {profilePage:state.profilePage}
 };

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostCreator())},
        updateNewPostText: (text) => {dispatch(changeTextCreator(text));}
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;