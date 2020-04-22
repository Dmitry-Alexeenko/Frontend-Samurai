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

//------------sort------------//
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

//------------Рекурсия------------//

export const rec = (count) => {

    //console.log('count ' + count);

    if(count === 0) {
        return null
    } else {
        rec(count - 1)
    }
};

export const copyObject = (object) => {

    let newObject = {...object, copy:'copy'};

    for (let key in newObject) {
        if(typeof (newObject[key]) === "object") {
            newObject[key] = {...copyObject(newObject[key])};
        }
    }
    return newObject
}

export const sumNumbers = (arr) => {
    if(arr.length === 0) {
        return 0
    } else {
        return arr[0] + sumNumbers(arr.slice(1))
    }
}

export const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr
    } else {
        let operand = arr[0];
        let less = [];
        let more = [];
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < operand) {
                less.push(arr[i])
            } else {
                more.push(arr[i])
            }
        }
        return quickSort(less) + [operand] + quickSort(more)
    }
}





