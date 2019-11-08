import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users:[...state.users] т.е этот вариант с нижним идентичные
                users: state.users.map(u => {     //пробегаемся по массиву users и .map создает новый массив элементами которого будут сидеть все те же самые users
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                //users:[...state.users] т.е этот вариант с нижним идентичные
                users: state.users.map(u => {     //пробегаемся по массиву users и .map создает новый массив элементами которого будут сидеть все те же самые users
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            });

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
export const unfollowCreator = (id) => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgress(true, id));
        userAPI.unfollowAtUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(setToggleFollowingProgress(false, id));

        })
    }
};

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgress(true, id));
        userAPI.followAtUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(setToggleFollowingProgress(false, id));

        })
    }
};

export default usersReducer;