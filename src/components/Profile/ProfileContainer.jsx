import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {SavePhoto, UpdateProfile, UpdateUserStatus, UserProfile, UserStatus} from "../../Redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.UserProfile(userId);
        this.props.UserStatus(userId);
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
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {UserProfile, UserStatus, UpdateUserStatus, SavePhoto, UpdateProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
