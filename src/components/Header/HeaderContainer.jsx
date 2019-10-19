import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            /*если кросдоменные запросы, то браузер не отправляет куку автоматически
            * поэтому вторым параметром передаем withCredentials и если сервак поддерживает то на него уйдет запрос*/
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let id = response.data.data.id;
                let login = response.data.data.login;
                let email = response.data.data.email;
                this.props.setAuthUserData(id, login, email);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                        this.props.setAuthUserPhoto(response.data.photos.small);
                    });

            }
        });

    }

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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserPhoto})(HeaderContainer);