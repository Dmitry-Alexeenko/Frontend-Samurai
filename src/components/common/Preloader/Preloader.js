import React from 'react';
import preloader from './../../../assets/images/preloader.svg'
import {createUseStyles} from "react-jss";

let Preloader = (props) => {
    const classes = useStyles();
    return (
            <img  src={preloader} alt={'preloader'} className={classes.Preloader}/>
    )
};

const useStyles = createUseStyles({
    Preloader: {
        width: 60,

    },
});

export default Preloader;