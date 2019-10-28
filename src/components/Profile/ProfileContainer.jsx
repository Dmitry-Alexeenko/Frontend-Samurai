import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    UpdateUserStatusThunkCreator,
    UserProfileThunkCreator,
    UserStatusThunkCreator
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4937;
        }
        this.props.UserProfileThunkCreator(userId);
        this.props.UserStatusThunkCreator(userId);

    }
    render() {
        return  <Profile {...this.props} profile={this.props.profile} status={this.props.status} UpdateUserStatusThunkCreator={this.props.UpdateUserStatusThunkCreator}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

export default compose (
    connect(mapStateToProps, {UserProfileThunkCreator, UserStatusThunkCreator, UpdateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
