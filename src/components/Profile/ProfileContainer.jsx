import React from 'react';
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataContainerComponent =  withRouter(ProfileContainer); //это тоже контейнерная компонента
/*работает так же как и connect. connect возвращ новую компоненту, которая отрисует ProfileContainer
* то же самое и withRouter, по факту вернет новую компоненту, которая отрисует ProfileContainer, но в нее еще
* закинутся данные из URL
*/

export default connect ( mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);