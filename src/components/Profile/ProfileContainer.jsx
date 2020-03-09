import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    SavePhoto, UpdateProfile,
    UpdateUserStatus,
    UserProfile,
    UserStatusThunkCreator
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorezedUserId;
        }

        this.props.UserProfile(userId);
        this.props.UserStatusThunkCreator(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = this.props.match.params.userId;
        if (userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        UpdateUserStatus={this.props.UpdateUserStatus}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.SavePhoto}
                        updateProfile={this.props.UpdateProfile}/>

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorezedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {
        UserProfile,
        UserStatusThunkCreator,
        UpdateUserStatus,
        SavePhoto,
        UpdateProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
