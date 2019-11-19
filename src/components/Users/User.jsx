import React from 'react';
import c from './Users.module.scss';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let User = (props) => {
    return <div className={c.userItem}>
        <div>
            <div className={c.userItem__info}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                </NavLink>
                <div className={c.userItem__statusName}>
                    <div className={c.userItem__name}>{props.user.name}</div>
                    <div className={c.userItem__status}>{props.user.status}</div>
                </div>
            </div>
            {props.user.followed
                ? <button className={c.userItem__btn} disabled={props.followingInProgress
                    .some(id => id === props.user.id)} onClick={() => {
                    props.unfollowCreator(props.user.id);
                }}>Unfollow</button>
                : <button className={c.userItem__btn} disabled={props.followingInProgress
                    .some(id => id === props.user.id)} onClick={() => {
                    props.followThunkCreator(props.user.id);
                }}>Follow</button>}
        </div>

        <div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </div>
    </div>
};

export default User;