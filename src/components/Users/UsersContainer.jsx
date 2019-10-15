import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followCreator,
    setCarrentPageCreater,
    setUsersCreater,
    setUsersTotalCountCreater,
    unFollowCreator
} from "../../Redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreater(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCarrentPageCreater(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountCreater(totalCount))
        }

    }
};


let UsersContainer  = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;