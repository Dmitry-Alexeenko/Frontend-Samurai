import React from 'react';
import c from '../../styles/News.module.scss';

const News = () => {
    return (
        <div className={c.NewsCont}>
            <div className={c.newsPage}>
                <span className={c.newsPage__warning}>This section is under development.</span> <br/>
                <span>In the meantime you can read the article about   <a href="https://reactjs.org/docs/hooks-effect.html"
                                                                          target="_blank">hook</a> </span>
            </div>
        </div>

    )
};

export default News;