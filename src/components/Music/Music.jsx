import React from 'react';
import c from '../../styles/Music.module.scss';

const Music = () => {
    return (
        <div className={c.musicPage}>
            <span className={c.musicPage__warning}>This section is under development.</span> <br/>
            <span>But you can listen to my playlist on    <a href="https://music.yandex.ru/users/dmitiy.kniaz/playlists/3"
                                                                      target="_blank">Yandex music</a> </span>
        </div>
    )
};

export default Music;