import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";



let User = (props) => {
    return <div>
        <div className={c.wrapper}>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={ props.user.photos.small != null ?  props.user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>
                { props.user.followed
                    ? <button disabled={props.followingInProgress.some(id => id ===  props.user.id)} onClick={() => {
                        props.unfollowCreator( props.user.id);
                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id ===  props.user.id)} onClick={() => {
                        props.followThunkCreator( props.user.id);
                    }}>Follow</button>}
            </div>
        </div>
        <div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </div>
            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
        </div>
    </div>
};

export default User;