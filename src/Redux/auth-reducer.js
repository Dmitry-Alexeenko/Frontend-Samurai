import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "social_network/auth/SET_USER_DATA";
const SET_USER_PHOTO = "social_network/auth/SET_USER_PHOTO";
const AUTHORIZE_ON_SERVICE = "social_network/auth/AUTHORIZE_ON_SERVICE";


let initialState = {
    id: null,
    email: null,
    login: null,
    photos: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photos: action.photo
            };
        case AUTHORIZE_ON_SERVICE:
            return {
                ...state,
                id: action.id
            };
        default:
            return state;
    }

};


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo: photo});


export const setAuthUserThunkCreator = () => {
    return async (dispatch) => { //результатом async функции вернентся промис
        let response = await headerAPI.getUserLogin();
        if (response.data.resultCode === 0) {
            let id = response.data.data.id;
            let login = response.data.data.login;
            let email = response.data.data.email;
            dispatch(setAuthUserData(id, login, email, true));
            headerAPI.getUserLoginPhoto(id).then(photos => {
                dispatch(setAuthUserPhoto(photos.small));
            });
        }
    };
};

export const authorizeOnServiceThunkCreator = (authorizeData) => {
    return async (dispatch) => {
    let response = await headerAPI.authorizeOnService(authorizeData)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message})) //'login'- форма которую обрабатываем
                /*_error это общая ошибка, после этого в форме login в props появится error*/
            }
        }

};

export const logoutThunkCreator = () => {
    return async (dispatch) => {
    let response = await headerAPI.logout();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }

    }
};

export default authReducer;