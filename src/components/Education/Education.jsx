import React from 'react';
import {createUseStyles} from 'react-jss'
import Container from "../common/Conponents/Container";

const useStyles = createUseStyles({
    title: {
        fontSize: 22,
        fontWeight: 600,
        margin: 0,
    },
})

const Education = (props) => {

    const classes = useStyles();

    return (
        <Container>

            <h1 className={classes.title}>
                База знаний
            </h1>

            <p>
                Данный раздел содержит учебный материал с которым может ознакомится каждый. Просто выберете главу.
                Данная статья написана на основе книги "Грокаем алгиритмы" Адитья Брахгава
            </p>

            <span>Алгоритмы</span>
            <p>
                Все алгоритмы описанные здесь написаны на языке JavaScript.
            </p>
            <a > Бинарный поиск</a>
            <p>
                Бинарный поиск - алгоритм на входе получающий отсортированный список элементов. Если елемент, который
                ищем, присутствует в списке, возвращаем его. Иначе возвращаем null.
            </p>
            <h3>Принцип работы</h3>
            <p>Например, есть массив из 100 элементов. Для того что бы найти нужный элемент, начнем его искать с середины.
            т.е. с 50.  </p>
        </Container>
    )
};

export default Education;