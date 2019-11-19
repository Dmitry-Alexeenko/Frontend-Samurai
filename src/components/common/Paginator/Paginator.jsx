import React, {useState} from 'react';
import c from "./Paginator.module.scss";



let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize); //сколько порций
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={c.paginator}>
            {portionNumber > 1 &&
            <button className={c.paginator__btn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Less</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={`${c.paginator__page} ${(props.currentPage === p ? c.paginator__selectPage : "")}`}
                                 onClick={() => {
                                     props.onPageChanget(p)
                                 }}>{p}</span>
                })}

            {portionNumber < portionCount &&
            <button className={c.paginator__btn} onClick={() => {setPortionNumber(portionNumber + 1)}}>More</button>}
        </div>
    )
};

export default Paginator;