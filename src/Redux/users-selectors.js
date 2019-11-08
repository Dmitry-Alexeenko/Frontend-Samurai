import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

const getUsersSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => true)});
/*Есть селектор, селектор по сути функция, которая делает какие-то операции и что то возвращает.
* Reselect стоит пользоваться когда селекторы сложные, если не сложные, то можно и без Reselect
* Reselect сохраняет текущий результат селектра и когда селектр снова вызовется, он сперва сравнит его с прошлым
* результатом и если  входные данные (результат getUsers) и isFetching не изменились,
* функция просто вернет кешированный расчет элементов и их итогов.
* Если элементы изменены (например, добавлен элемент, изменилось количество, любые манипуляции с результатом getItems),
* функция снова будет выполнена*/
/*
 !!!!getUsers - это зависомость, их иожет быть несколько
    и когда библиотека будет вызывать эту функцию, она сперва вызовет getUsers, getUsers
    возвращает users, значит надо в скобки засунуть users (users), потом если есть еще одна зависомость
    , то библиотека и ее вызывает и в скобки надо засунуть результат этой зависимости
    getUsersSelector(state) - в mapStateToProps этот селектор вызывается так
*/
