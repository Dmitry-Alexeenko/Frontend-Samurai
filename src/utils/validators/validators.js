/*Validator Это функция, которая получает value и возвращает, если есть ошибка, error message, если ошибки нет, то undefined
* Далее на Fild в форме вещается validate={requireField} и в него закидываются все валидаторы, которые нужны для конкретного
* поля ввода*/
/*Замыкание - функция, которая возвращает другую функцию, и эта другая функция имеет доступ к данным родительской функции*/

export const requireField = value => {
    if(value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {  //функция которая возвращает другую функцию
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};