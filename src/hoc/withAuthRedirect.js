import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const  withAuthRedirect = (Component) => {  //принимает компонету
    class RedirectComponent extends React.Component { //Component c большой буквы
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component{...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;

};