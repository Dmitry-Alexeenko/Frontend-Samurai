import React from 'react';
import userPhoto from "../../assets/images/user.png";
import {LogoutOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {createUseStyles} from 'react-jss'
import {logout} from "../../Redux/reducers/auth-reducer";


const useStyles = createUseStyles({
    AuthContent: {
        display: 'flex',
        alignItems: 'center',
    },
    AuthContent__UserPhoto: {
        width: 30,
        borderRadius: '50%',
        marginLeft: 10,
        marginRight: 20,
    },
    AuthContent__btn: {
        fontSize: 18,
    },
});

const AuthContent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const photo = useSelector(state => state.auth.photos);
    const login = useSelector(state => state.auth.login);

    const logOut = () => {
        dispatch(logout())
    };

    return (
        <div className={classes.AuthContent}>
            <div>{login && login.length < 40 && login} </div>
            <img className={classes.AuthContent__UserPhoto} src={photo != null ? photo : userPhoto} alt="userPhoto"/>
            <LogoutOutlined onClick={logOut} className={classes.AuthContent__btn}/>
        </div>
    )
};

/*Header.defaultProps = {
    marginLeft: 20 ,
};*/


export default AuthContent;