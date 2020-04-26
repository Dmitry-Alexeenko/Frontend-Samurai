import {captchaAPI, headerAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {actions} from "../actions";
import {initialState, initialStateType} from "../initialStates/authInitState";

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case actions.SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case actions.SET_USER_PHOTO:
            return {
                ...state,
                photos: action.photo
            };
        case actions.AUTHORIZE_ON_SERVICE:
            return {
                ...state,
                id: action.id
            };

        case actions.GET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }

};

//---------setAuthUserData action creator--------------------
type SetAuthUserDataActionDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof actions.SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: actions.SET_USER_DATA,
    data: {id, login, email, isAuth}
});

//---------setCaptchaData action creator--------------------
type setCaptchaDataActionType = {
    type: typeof actions.GET_CAPTCHA
    captcha: any
}

export const setCaptchaData = (captcha: any): setCaptchaDataActionType => ({
    type: actions.GET_CAPTCHA,
    captcha: captcha
});

export const setAuthUserPhoto = (photo: any) => ({type: actions.SET_USER_PHOTO, photo: photo});

const getCaptcha = () => {
    return async (dispatch: any) => {
        let response = await captchaAPI.getCaptcha();
        const captcha = response.data.url;
        dispatch(setCaptchaData(captcha));
    };
};

export const setAuthUser = () => {
    return async (dispatch: any) => {
        let response = await headerAPI.getUserLogin();
        if (response.data.resultCode === 0) {
            let id = response.data.data.id;
            let login = response.data.data.login;
            let email = response.data.data.email;
            dispatch(setAuthUserData(id, login, email, true));
            headerAPI.getUserLoginPhoto(id).then((photos: any) => {
                dispatch(setAuthUserPhoto(photos.small));
            });
        }
    };
};

export const authorizeOnService = (authorizeData: any) => {
    return async (dispatch: any) => {
        let response = await headerAPI.authorizeOnService(authorizeData);
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}));

        }
    }

};

export const logout = () => {
    return async (dispatch: any) => {
        let response = await headerAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
};

export default authReducer;