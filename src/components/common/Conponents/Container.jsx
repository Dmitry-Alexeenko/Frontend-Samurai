import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        color:'black',
        backgroundColor: props => props.backgroundColor,
        borderRadius: 5,
        margin: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
        },
        padding: 15,
    },
});

const Container = ({children, ...props}) => {

    const classes = useStyles(props);

    return (
        <div className={classes.container}>
            {children}
        </div>
    )
};

Container.defaultProps = {
    backgroundColor: '#ffffff' ,
};

export default Container;