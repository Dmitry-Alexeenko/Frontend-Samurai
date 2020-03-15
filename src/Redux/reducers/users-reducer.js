import {userAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/object-helpers";
import {actions} from "../actions";
import {initialState} from "../initialStates/usersInitState";

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SUBSCRIBE:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case actions.UNSUBSCRIBE:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case actions.SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case actions.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case actions.SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case actions.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case actions.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => !action.userId)
            }
        }
        default:
            return state;
    }
};


export const follow = (userId) => ({type: actions.SUBSCRIBE, userId: userId});
export const unFollow = (userId) => ({type: actions.UNSUBSCRIBE, userId: userId});
export const setUsers = (users) => ({type: actions.SET_USERS, users: users});
export const setCurrentPage = (pageNumber) => ({type: actions.SET_CURRENT_PAGE, pageNumber: pageNumber});
export const setUsersTotalCount = (totalCount) => ({type: actions.SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: actions.TOGGLE_IS_FETCHING, isFetching: isFetching});
export const setToggleFollowingProgress = (isFetching, userId) => ({
    type: actions.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersTotalCount(response.data.totalCount));
    }
};

const isSubscribed = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setToggleFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setToggleFollowingProgress(false, id));
};
export const unsubscribe = (id) => {
    return async (dispatch) => {
        //забиндил потому что метод беру у объекта и вызываю оторвано от самого объекта
        let apiMethod = userAPI.unfollowAtUser.bind(userAPI);
        await isSubscribed(dispatch, id, apiMethod, unFollow)
    }
};
export const subscribe = (id) => {
    return async (dispatch) => {
        let apiMethod = userAPI.followAtUser.bind(userAPI);
        await isSubscribed(dispatch, id, apiMethod, follow)
    }
};

export default usersReducer;