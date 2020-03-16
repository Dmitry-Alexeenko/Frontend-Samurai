import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import c from '../../styles/Users.module.scss';


let Users = (props) => {

    let {
        users, followingInProgress, unsubscribe, subscribe, currentPage,
        onPageChanged, totalUsersCount, pageSize, portionSize
    } = props;

    return (
        <div className={c.usersPage}>
            <Paginator currentPage={currentPage} onPageChanget={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize} portionSize={portionSize}/>
            {users.map(u =>
                <User key={u.id} user={u} followingInProgress={followingInProgress} unsubscribe={unsubscribe}
                      subscribe={subscribe}/>
            )}
        </div>
    )
};

export default Users;