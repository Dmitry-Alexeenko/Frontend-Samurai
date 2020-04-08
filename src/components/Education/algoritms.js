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
};


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

export const sort = (list) => {
    let oldList = [...list];
    let newList = [];
    for(let i = 0; i < oldList.length; i) {
        let minNumber = min(oldList);
        newList.push(oldList[minNumber]);
        oldList.splice(minNumber,1)

    }
    return newList
};





