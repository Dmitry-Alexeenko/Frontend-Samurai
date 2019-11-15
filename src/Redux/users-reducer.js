import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "social_network/users/FOLLOW";
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_USERS = "social_network/users/SET_USERS";
const SET_CURRENT_PAGE = "social_network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "social_network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "social_network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
};

const usersReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                //users:[...state.users] т.е этот вариант с нижним идентичные
               /*users: state.users.map(u => {     //пробегаемся по массиву users и .map создает новый массив элементами которого будут сидеть все те же самые users
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                //users:[...state.users] т.е этот вариант с нижним идентичные
                /*users: state.users.map(u => {     //пробегаемся по массиву users и .map создает новый массив элементами которого будут сидеть все те же самые users
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            };
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => !action.userId)//пропускаю торлько ту id, кот не равна action.userId
            }
        }
        default:
            return state;
    }

};


export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber});
export const setUsersTotalCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const setToggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersTotalCount(response.data.totalCount));
    }
};
/*При запуске getUsersThunkCreator страница перерисовывается 5 раз
* 1) Первый рендер страницы, создание реактом объекта (в лице компонента)
* 2) Запускается ComponentDidMount  и запускает 2 перезагрузку ( для  dispatch(toggleIsFetching(true)); true добавляется
* в стор и компонента перерисовывается)
* 3) после того как промис сходит на сервак и придет, запускается dispatch(toggleIsFetching(false)); и false добавляется в стор
* и стор перерисовывается
* 4)  dispatch(setUsers(data.items)); диспатчатся юзеры и перерисовывается страница
* 5) dispatch(setUsersTotalCount(data.totalCount));*/

const followUnfollowFlow =async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setToggleFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setToggleFollowingProgress(false, id));
};
export const unfollowCreator = (id) => {
    return async (dispatch) => {
        let apiMethod = userAPI.unfollowAtUser.bind(userAPI); //забаяндил потому что метод беру у объекта и вызываю оторвано от самого объекта
        followUnfollowFlow(dispatch, id, apiMethod, unFollow)
    }
};
export const followThunkCreator = (id) => {
    return async (dispatch) => {
        let apiMethod = userAPI.followAtUser.bind(userAPI);
        followUnfollowFlow(dispatch, id, apiMethod, follow)
    }
};

export default usersReducer;