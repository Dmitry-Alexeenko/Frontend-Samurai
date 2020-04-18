import React from 'react';
import preloader from './../../../assets/images/preloader.svg'
import {createUseStyles} from "react-jss";

let PreloaderApp = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.PreloaderApp}>
            <div className={classes.PreloaderApp__image}>
                <img src={preloader} alt={'preloader'} className={classes.PreloaderApp__image}/>
            </div>

        </div>
    )

};

const useStyles = createUseStyles({
    PreloaderApp: {
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    PreloaderApp__image: {
        width: 100,
    },
});

export default PreloaderApp;