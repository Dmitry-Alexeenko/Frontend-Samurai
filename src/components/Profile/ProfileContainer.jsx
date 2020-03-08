import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    SavePhoto,
    UpdateUserStatusThunkCreator,
    UserProfileThunkCreator,
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

        this.props.UserProfileThunkCreator(userId);
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
                        UpdateUserStatusThunkCreator={this.props.UpdateUserStatusThunkCreator}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.SavePhoto}/>

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
    connect(mapStateToProps, {UserProfileThunkCreator, UserStatusThunkCreator, UpdateUserStatusThunkCreator, SavePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
