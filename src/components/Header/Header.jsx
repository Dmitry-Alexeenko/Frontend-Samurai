import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import {LogoutOutlined, RadarChartOutlined, LoginOutlined} from '@ant-design/icons';
import useBreakpoint from "../../custom_hook/useBreakpoint";
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    header__container: {
        backgroundColor: '#000c18',
        color: 'white',
        height: 'auto',
        position: 'fixed',
        width: '100%',
        zIndex: 999,
    },
    header__content: {
        minWidth: 300,
        maxWidth: 1200,
        margin: '0 auto',
        fontWeight: 'bold',
        minHeight: 40
    },
    header__logoContent: {
        display: 'flex',
        alignItems: 'center'
    },
    header__logo: {
        fontSize: 22,
        marginLeft: props => props.screenWidth !== 'xs' ? 20 : 30,
    },
    header__name: {
        marginLeft: 10
    },
    header__UserPhoto: {
        width: 30,
        borderRadius: '50%',
        margin: '0 10px',
    },
    header__btn: {
        textAlign: 'center',
        marginRight: 20
    },
    header__loginContainer: {
        textAlign: 'right'
    }
});


const Header = (props) => {

    const screenWidth = useBreakpoint();

    const classes = useStyles({...props, screenWidth});

    let {logout} = props;
    let {photo, login, isAuth} = props;

    const isAuthContent = () => {
        return (
            <>
                <Col flex={'230px'} className={classes.header__loginContainer}>
                    <span>{login}</span>
                    <img className={classes.header__UserPhoto} src={photo != null ? photo : userPhoto}
                         alt="userPhoto"/>
                </Col>
                <Col flex={'50px'} className={classes.header__btn}>
                    <Button type="primary" shape="circle" icon={<LogoutOutlined/>} size={'small'} onClick={logout}/>
                </Col>
            </>
        )
    };

    const notIsAuthContent = () => {
        return (
            <Col flex={'60px'} className={classes.header__btn}>
                <Button type="primary" shape="circle" size={'small'}>
                    <NavLink to={"/Login"}>
                        <LoginOutlined/>
                    </NavLink>
                </Button>
            </Col>
        )
    };

    return (
        <div className={classes.header__container}>
            <Row className={classes.header__content} justify={'center'} align={'middle'}>
                <Col flex={'auto'} className={classes.header__logoContent}>

                    <RadarChartOutlined className={classes.header__logo}/>
                    {
                        screenWidth !== 'xs' &&
                        <span className={classes.header__name}>Frontend Samurai</span>
                    }

                </Col>

                {isAuth ? isAuthContent() : notIsAuthContent()}
            </Row>
        </div>
    )
};

/*Header.defaultProps = {
    marginLeft: 20 ,
};*/


export default Header;