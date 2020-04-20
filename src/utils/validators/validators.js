/*Validator Это функция, которая получает value и возвращает, если есть ошибка, error message, если ошибки нет, то undefined
* Далее на Fild в форме вещается validate={requireField} и в него закидываются все валидаторы, которые нужны для конкретного
* поля ввода*/

export const requireField = value => {
    if(value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value = '') => {
    if(value.length > maxLength) return `Не более ${maxLength} символов`;
    return undefined;
};

export const minLengthCreator = (minLength) => (value = '') => {
    debugger
    if(value.length < minLength) return `Слишком мало, пес`;
    return undefined;
};