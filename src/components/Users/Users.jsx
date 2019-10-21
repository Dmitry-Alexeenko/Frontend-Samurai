import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && c.selectPage}
                                 onClick={(e) => {
                                     props.onPageChanget(p)
                                 }}>{p}</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>

                <div className={c.wrapper}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.setToggleFollowingProgress(true, u.id);
                                userAPI.unfollowAtUser(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.setToggleFollowingProgress(false, u.id);
                                });
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.setToggleFollowingProgress(true, u.id);
                                userAPI.followAtUser(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setToggleFollowingProgress(false, u.id);
                                });
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
};

export default Users;