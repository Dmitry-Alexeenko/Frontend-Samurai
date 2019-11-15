import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import c from  './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (

        <div >
            <ProfileInfo profile={props.profile} status={props.status}  UpdateUserStatusThunkCreator={props.UpdateUserStatusThunkCreator}/>
            <MyPostsContainer />
            {/*MyPostsContainer будет каждый раз перерисовываться без нужной на то причины только из за того,что  в
            ProfileContainer приходт новые пропсы и эта компонента перерисовывается, а так как MyPostsContainer сидит в
            ProfileContainer то и она тоже перерисуется, хотя в нее пропсы даже не приходят*/}
        </div>
    )
};

export default Profile; // экспортируем код в другие файлы default экспортирует все.