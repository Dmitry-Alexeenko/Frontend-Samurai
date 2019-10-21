import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../Redux/auth-reducer";
import {headerAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getUserLogin().then(data => {
            if (data.resultCode === 0) {
                let id = data.data.id;
                let login = data.data.login;
                let email = data.data.email;
                this.props.setAuthUserData(id, login, email);
                headerAPI.getUserLoginPhoto(id).then(photos => {
                        this.props.setAuthUserPhoto(photos.small);
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