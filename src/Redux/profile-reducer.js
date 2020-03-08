import {profileAPI} from "../api/api";

const ADD_POST = "social_network/profile/ADD-POST";
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const ADD_USER_STATUS = "social_network/profile/ADD_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "social_network/profile/SAVE-PHOTO-SUCCESS";

let initialState = {
    posts: [
        {id: 1, message: "It is React", likesCount: 1},
        {id: 2, message: "It is thirst post", likesCount: 16},
        {id: 3, message: "It is second post", likesCount: 9},
        {id: 4, message: "It is first post", likesCount: 111}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
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

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};

        default:
            return state;
    }
};

export const addPostCreator = (formData) => ({type: ADD_POST, formData: formData});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const addUserStatus = (status) => ({type: ADD_USER_STATUS, status: status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

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
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(addUserStatus(status));
        }
    }
};

export const SavePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
};

export default profileReducer;