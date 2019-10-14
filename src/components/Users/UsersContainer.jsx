import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followCreator, setUsersCreater, unFollowCreator} from "../../Redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }

    }
};


let UsersContainer  = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;