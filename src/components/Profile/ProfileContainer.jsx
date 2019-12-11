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
            userId = this.props.authorezedUserId;
        }
        /*мы делаем 2 запроса, один на профиль, другой на статус
        * и они каждый раз отрабатывают по разному. Кто то быстрее, кто то медленнее
        * а компонента profile не показывается (включается preloader) пока, туда не придет пропс с  profile
        * и пока пропс профиль не пришел, а пропс со статусом пришел, то все отображается хорошо, статус успел придти
        * ели же в припсы приходит первый profile, то компонента начинает редрерится без пропсов статус*/
        this.props.UserProfileThunkCreator(userId);
        this.props.UserStatusThunkCreator(userId);
        /*setTimeout(() => {this.props.UserStatusThunkCreator(userId);}, 1000)*/


    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        UpdateUserStatusThunkCreator={this.props.UpdateUserStatusThunkCreator}/>
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
    connect(mapStateToProps, {UserProfileThunkCreator, UserStatusThunkCreator, UpdateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
