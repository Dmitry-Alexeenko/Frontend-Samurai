import React from 'react';
import {createUseStyles} from 'react-jss'



const LoadBtn = ({children, ...props}) => {
    const {selectPhoto} = props
    const classes = useStyles(props);

    return (
        <div>
            <input type="file" accept=".jpg, .jpeg, .png" onChange={selectPhoto}
                   name={"file"} id={"file"} className={classes.LoadBtn}/>
            < label htmlFor="file" className={classes.LoadBtn__label}>Изменить фото</label>
        </div>
    )
};

const useStyles = createUseStyles({
    LoadBtn: {
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
    },
    LoadBtn__label: {
        boxSizing: 'border-box',
        textAlign: 'center',
        borderBottom:'1px solid #b2b2b2',
        padding: '5px',
        width: '100%',
        color: '#b2b2b2',
        display: 'inline-block',
        cursor: 'pointer',
        transition: '0.1s all',
        '&:hover': {
            color: 'white',
            borderBottom:'1px solid white',
        }
    }

});

export default LoadBtn;