import React from 'react';
import preloader from './../../../assets/images/preloader.svg'
import c from './Preloader.module.scss';

let Preloader= (props) => {
    return <img className={c.preloader} src={preloader}/>
};

export default  Preloader;