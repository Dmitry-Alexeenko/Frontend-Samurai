
import {addPostCreator} from "../../../Redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {posts:state.profilePage.posts}
 };

const MyPostsContainer = connect(mapStateToProps, {addPostCreator})(MyPosts);

export default MyPostsContainer;