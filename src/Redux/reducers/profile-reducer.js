import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {actions} from "../actions";
import {initialState} from "../initialStates/profileInitState";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.formData.newPostText, likesCount: 7}],
            };
        case actions.SET_USER_PROFILE:

            return {...state, profile: action.profile};
        case actions.ADD_USER_STATUS:
            return {...state, status: action.status};

        case actions.SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};

        default:
            return state;
    }
};

export const addPostCreator = (formData) => ({type: actions.ADD_POST, formData: formData});
export const setUserProfile = (profile) => ({type: actions.SET_USER_PROFILE, profile: profile});
export const addUserStatus = (status) => ({type: actions.ADD_USER_STATUS, status: status});
export const savePhotoSuccess = (photos) => ({type: actions.SAVE_PHOTO_SUCCESS, photos});

export const UserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data));
    }
};

export const UserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
        dispatch(addUserStatus(response.data));
    }
};

export const UpdateUserStatus = (status) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(addUserStatus(status));
            }
        } catch (error) {
            console.error("something error");
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

export const UpdateProfile = (formData) => {
    return async (dispatch, getState) => {

        const userId = getState().auth.id;
        let response = await profileAPI.saveProfile(formData);
        if (response.data.resultCode === 0) {
            dispatch(UserProfile(userId));
        } else {
            dispatch(stopSubmit('ProfileDataForm', {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
};

export default profileReducer;