import React, {useState, useEffect} from 'react';
import c from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {

    const {status} = props;
    const {UpdateUserStatus} = props;

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        UpdateUserStatus(newStatus);
    };

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={c.status}>
            {!editMode &&
            <div>
                <span className={c.status__text} onDoubleClick={activateEditMode}> {status || "type text"} </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onChangeStatus} value={newStatus}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatus;