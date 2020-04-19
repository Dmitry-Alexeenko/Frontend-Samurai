import React from 'react';
import {createUseStyles} from 'react-jss'
import {EditOutlined} from "@ant-design/icons";


const EditBtn = ({children, ...props}) => {
    const {setEditMode} = props;
    const classes = useStyles(props);

    const edit = () => {
        setEditMode(true)
    };

    return (
        <div className={classes.EditBtn}>
            <span className={classes.EditBtn__Container} onClick={edit}>
                <span><EditOutlined/></span>
                <span className={classes.EditBtn__Text}>{children}</span>
            </span>
        </div>
    )
};

const useStyles = createUseStyles({
    EditBtn: {
        textAlign:'right'
    },
    EditBtn__Container: {
        fontSize: 13,
        cursor: 'pointer',
        transition: '0.1s all',
        color: '#b2b2b2',
        '&:hover': {
            color: 'white',
        }
    },
    EditBtn__Text: {
        fontSize: 10,
        paddingLeft: 5,
    },
});

export default EditBtn;