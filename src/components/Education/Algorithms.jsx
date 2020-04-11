import React from 'react';
import {createUseStyles} from 'react-jss'
import Container from "../common/Conponents/Container";
import {binary_search, copyObject, rec, sort} from "./algoritms";

const useStyles = createUseStyles({
    title: {
        fontSize: 22,
        fontWeight: 600,
        margin: 0,
    },
})

const Algorithms = (props) => {

    //const classes = useStyles();

    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = binary_search(list, 2);
    //console.log(result, "result")


    let result2 = sort([2,1,6,5,9,3,33,8]);
    //console.log(result2, "result2")

    rec(5);

    let obj = {
        el1:[1,2,3,4,5],
        el2:'qqq',
        el3:111,
        el4:{
            el4_1:[1,2,3,4,5,6],
            el4_2:{
                el4_2_1:{
                    q:'q',
                    w:'w'
                }
            },
            el4_3:{
                e:'e',
                r:'r',
                t:'t',
            }
        }
    };
    //console.log(obj, "original")
    console.log(copyObject(obj));
    console.log(obj, "original");
    return (
        <Container>

            <span>Алгоритмы</span>
            <p>
                Все алгоритмы описанные здесь написаны на языке JavaScript.
            </p>
            <a> Бинарный поиск</a>
            <p>
                Бинарный поиск - алгоритм на входе получающий отсортированный список элементов. Если елемент, который
                ищем, присутствует в списке, возвращаем его. Иначе возвращаем null.
            </p>
            <h3>Принцип работы</h3>
            <p>
                Например, есть массив из 10 элементов. [1,3,5,7,9,11,13,15,17,19]. И надо найти индекс числа 17.
                передаем этот массив и число 17 в функцию. И смотрим как работает код
            </p>

            <pre>
                    {
                        `
                    const algoritms = (list, item) => {
                    let low = 0; //начало массива
                    let high = list.length - 1; //конец массива

                    while (low <= high) {
                        let middle = Math.ceil((low + high) / 2);
                        let currentElement = list[middle];
    
                        //достаем индекс элемента, которого ищем если совпадает
                        if(currentElement === item) return middle; 
                        
                        //если текущий элемент больше искомого, меняем верхнюю планку
                        if(currentElement > item){ high = middle - 1}
                         
                        //если текущий элемент меньше искомого, меняем нижнюю планку
                        else { low = middle + 1}
                    }
                        return  NaN
                    }
                        `
                    }
            </pre>
            <p>
                Теперь поговорим про "О"-большое.<br/> "О"-большое описывает насколько быстро выполняется алгоритм.
                Если бы мы начали искать нужный элемент не бинарным поиском, т.е с самого первого элемента,
                то скорость была бы О(n). А если с бинарным поиском, то О(log n).
            </p>
            <p>
                Типичные примеры "О-большого" (в порядке убывания по скорости выполнения) <br/>
                О(log n) - log2 n (Для примера log2 16 = 4)<br/>
                О(n) - перебор всех элементов по очереди (линейное время) <br/>
                О(n * log n) - эффективные алгоритмы сортировки<br/>
                О(n2 (2 в степени)) - медленные алгоритмы сортировки<br/>
                О(n!) - очень медленные алгоритмы сортировки<br/>

            </p>

            <a> Сортировка выбором</a>
            <p>
                Сортировка выбором - медленная сортировка с коростью О(n2 (2 в степени)). Принимает не отсортированный
                массив ( [1,3,5,7,9,11,13,15,17,19] ) и возвращает отсортированный от min к max.
            </p>
            <pre>
                    {
                        `
                    //функция находит минимальное значение в массиве в 1 итерации
                    const min = (list) => { 
                        let minNumber = list[0];
                        let idMinNumber = 0;
                        for (let i = 1; i < list.length; i++) {
                            if(list[i] < minNumber) {
                                minNumber = list[i];
                                idMinNumber = i;
                            }
                        }
                        return idMinNumber
                    };
                    
                    //функция собирает новый масив
                    export const sort = (list) => { 
                        let oldList = [...list]; //копируем массив
                        let newList = [];
                        for(let i = 0; i < oldList.length; i) {
                            let minNumber = min(oldList);
                            newList.push(oldList[minNumber]);
                            oldList.splice(minNumber,1) //сокращаем массив
                    
                        }
                        return newList
                    };
                        `
                    }
            </pre>

            <a> Рекурсия</a>
            <p>
                Рекурсия - это функуия которая вызывет сама себя. Что бы рекурсия не была вечной, нужно в какой то
                момент прервать рекурсию. Для этого каждая рекурсивная функция состоит из 2 частей: <br/>
                -базового случая<br/>
                -рекурсовного случая<br/>
            </p>

            <pre>
                {`
                const rec = (count = 3) => {

                    console.log('count ' + count)
                    
                    if(count === 0) { //базовый случай
                        return
                    } else {         //рекурсивный случай
                        rec(count - 1)
                    }
                }
                `}
            </pre>
            <p>
                Как работает рекурсия: <br/>
                Когда функция вызывает саму себя, Компьютер сохраняет ее и ее данные в стек. И продолжит сохранять до
                тех пор, пофа фцнкция будет вызывать саму себя.

            </p>
            <p>
                Взлянем на наш пример:<br/>
                3)rec вызывается снова и попадает в стек с данными 1 <br/>
                2)rec вызывается снова и попадает в стек с данными 2 <br/>
                1)rec вызываетсяи попадает в стек с данными 3 (первый запуск функции)
            </p>
            <p>
                Действие 1 и 2 приостановлены, но не закончены пока не закончится действие 3. После действия 3 закончится
                действие 2, а после и действое 1.
            </p>
        </Container>
    )
};

export default Algorithms;