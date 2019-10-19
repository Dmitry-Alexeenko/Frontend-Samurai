import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";


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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true,
                                    headers: {
                                        "API-KEY":"1a2f890d-63df-4bc9-b670-fa43a5c6e581"
                                    }
                                    })
                                /*тут withCredentials как и в get запроса  передаем 2-м параметром*/
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {withCredentials: true,
                                        headers: {
                                            "API-KEY":"1a2f890d-63df-4bc9-b670-fa43a5c6e581"
                                        }})
                                /*тут withCredentials в отличии от get запроса ты передаем 3-м параметром*/
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
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