import React from 'react';
import {addPostCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {profilePage:state.profilePage}
 };


const MyPostsContainer = connect(mapStateToProps, {addPostCreator})(MyPosts);

export default MyPostsContainer;