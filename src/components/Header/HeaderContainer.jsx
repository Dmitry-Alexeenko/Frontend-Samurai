import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../Redux/auth-reducer";



class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photos
    }
};

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);