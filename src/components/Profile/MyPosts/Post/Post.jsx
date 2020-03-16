import React from 'react';
import c from '../../../../styles/Post.module.scss';
import logo from "../../../../assets/images/user.png";

const Post = (props) => {
    return (
        <div className={c.PostItem}>
            <img src={logo}/>
            <div className={c.PostItem__data}>
                <div className={c.PostItem__text}>{props.message}</div>
                <div className={c.PostItem__likeContainer}>like
                    <span className={c.PostItem__like}>{props.like}</span>
                </div>
            </div>
        </div>
    )
};

export default Post;