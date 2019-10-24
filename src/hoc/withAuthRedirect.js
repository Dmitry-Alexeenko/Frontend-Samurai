import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const  withAuthRedirect = (Component) => {  //4  принимает компонету и все предыдущие пропсы
    class RedirectComponent extends React.Component { //Component c большой буквы
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component{...this.props}/>
        }
    }

    /*5)    создаем  еще одну контейнерную компоненту что бы взять данные(через  пропсы) из  стейта и все предыдущие пропсы, и вставляем в нее RedirectComponent*/
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;

};