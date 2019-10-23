import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {UserProfileThunkCreator} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.UserProfileThunkCreator(userId);

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent); //это тоже контейнерная компонента
/*работает так же как и connect. connect возвращ новую компоненту, которая отрисует ProfileContainer
* то же самое и withRouter, по факту вернет новую компоненту, которая отрисует ProfileContainer, но в нее еще
* закинутся данные из URL
*/

export default connect(mapStateToProps, {UserProfileThunkCreator})(WithUrlDataContainerComponent);