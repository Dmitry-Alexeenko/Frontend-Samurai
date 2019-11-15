import {profileAPI} from "../api/api";

const ADD_POST = "social_network/profile/ADD-POST";
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const ADD_USER_STATUS = "social_network/profile/ADD_USER_STATUS";

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    posts: [
        {id: 1, message: "Dorow, my name is React", likesCount: 1},
        {id: 2, message: "It is first post", likesCount: 16},
        {id: 3, message: "It is thirst post", likesCount: 9},
        {id: 3, message: "yes", likesCount: 111}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.formData.newPostText, likesCount: 7}],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case ADD_USER_STATUS:
            return {...state, status: action.status};
        default:                        //но если ничего не изм то вывод надо сделать по умолчанию
            return state;
    }
};

export const addPostCreator = (formData) => ({type: ADD_POST, formData: formData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const addUserStatus = (status) => ({type: ADD_USER_STATUS, status: status});

export const UserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data));
    }
};

export const UserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
        dispatch(addUserStatus(response.data));
    }
};

export const UpdateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updeteStatus(status); // в response будет результатом которым зарезолвится промис
        if (response.data.resultCode === 0) {
            dispatch(addUserStatus(status));
        }
    }
};

export default profileReducer;