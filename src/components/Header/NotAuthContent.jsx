import React from 'react';
import {NavLink} from "react-router-dom";
import {LoginOutlined} from '@ant-design/icons';
import {createUseStyles} from 'react-jss'

const NotAuthContent = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.NotAuthContent__btn}>
            <NavLink to={"/Login"}>
                <LoginOutlined/>
            </NavLink>
        </div>
    )
};

const useStyles = createUseStyles({
    NotAuthContent__btn: {
        color: 'white',
        fontSize: 18,
    },
});


/*Header.defaultProps = {
    marginLeft: 20 ,
};*/


export default NotAuthContent;