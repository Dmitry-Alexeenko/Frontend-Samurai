import React from 'react';
import c from '../../styles/Settings.module.scss';

const Settings = () => {
    return (
        <div className={c.settingsPage}>
            <span>Темная тема</span>
            <span className={c.settingsPage__warning}>This section is under development.</span> <br/>
        </div>
    )
};

export default Settings;