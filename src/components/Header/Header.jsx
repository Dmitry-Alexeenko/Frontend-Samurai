import React from 'react';
import {RadarChartOutlined} from '@ant-design/icons';
import useBreakpoint from "../../custom_hook/useBreakpoint";
import {createUseStyles} from 'react-jss'
import {useSelector} from "react-redux";
import AuthContent from "./AuthContent";
import NotAuthContent from "./NotAuthContent";

const Header = (props) => {

    const screenWidth = useBreakpoint();
    const classes = useStyles({...props, screenWidth});
    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <div className={classes.Header}>
            <div className={classes.Header__content}>
                <div className={classes.Header__logoContent}>
                    <RadarChartOutlined className={classes.Header__logo}/>
                    {screenWidth !== 'xs' && <span className={classes.Header__name}>Frontend Samurai</span>}
                </div>

                {isAuth ? <AuthContent/> : <NotAuthContent/>}
            </div>
        </div>
    )
};

const useStyles = createUseStyles({
    Header: {
        //backgroundColor: '#000c18',
        backgroundColor: '#00050a',
        color: 'white',
        top: 0,
        height: 'auto',
        position: 'fixed',
        width: '100%',
        zIndex: 999,
    },
    Header__content: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 300,
        maxWidth: 1000,
        margin: '0 auto',
        fontWeight: 'bold',
        minHeight: 40,
        padding: '0 10px',
        boxSizing:'border-box'
    },
    Header__logoContent: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center'
    },
    Header__logo: {
        fontSize: 22,
        marginLeft: props => props.screenWidth !== 'xs' ? 0 : 15,
    },
    Header__name: {
        marginLeft: 10
    },
});

/*Header.defaultProps = {
    marginLeft: 20 ,
};*/


export default Header;