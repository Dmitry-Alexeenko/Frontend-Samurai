export const binary_search = (list, item) => {
    let low = 0; //начало массива
    let high = list.length - 1; //конец массива

    while (low <= high) {
        let middle = Math.ceil((low + high) / 2);
        let currentElement = list[middle];

        if(currentElement === item) return middle; //достаем индекс элемента, которого ищем
        if(currentElement > item){ //если текущий элемент больше искомого, меняем верхнюю планку
            high = middle - 1
        } else { //если текущий элемент меньше искомого, меняем нижнюю планку
            low = middle + 1
        }
    }
    return  NaN
}




