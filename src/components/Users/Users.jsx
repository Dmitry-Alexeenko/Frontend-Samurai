import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import c from './Users.module.scss';


let Users = (props) => {
    return (
        <div className={c.usersPage}>
            <Paginator currentPage={props.currentPage} onPageChanget={props.onPageChanget}
                       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       portionSize={props.portionSize}/>
            {props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                        unfollowCreator={props.unfollowCreator}
                                        followThunkCreator={props.followThunkCreator}/>
            )}
        </div>
    )
};

export default Users;