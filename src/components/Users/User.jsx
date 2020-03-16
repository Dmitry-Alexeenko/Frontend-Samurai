import React from 'react';
import c from '../../styles/Users.module.scss';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let User = (props) => {

    let userId = props.user.id;
    let {name, status, photos, followed} = props.user;
    let {followingInProgress, unsubscribe, subscribe} = props;

    return (
        <div className={c.userItem}>

            <div>

                <div className={c.userItem__info}>
                    <NavLink to={'/profile/' + userId}>
                        <img src={photos.small != null ? photos.small : userPhoto} alt="UserPhoto"/>
                    </NavLink>
                    <div className={c.userItem__statusName}>
                        <div className={c.userItem__name}>{name}</div>
                        <div className={c.userItem__status}>{status}</div>
                    </div>
                </div>

                {followed
                    ? <button className={c.userItem__btn} disabled={followingInProgress.some(id => id === userId)}
                              onClick={() => {
                                  unsubscribe(userId);
                              }}>
                        Unsubscribe
                    </button>
                    : <button className={c.userItem__btn} disabled={followingInProgress.some(id => id === userId)}
                              onClick={() => {
                                  subscribe(userId);
                              }}>
                        Subscribe
                    </button>
                }

            </div>

            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>

        </div>
    )
};

export default User;