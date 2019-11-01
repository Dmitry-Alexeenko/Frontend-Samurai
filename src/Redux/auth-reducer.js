import {headerAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const AUTHORIZE_ON_SERVICE = "AUTHORIZE_ON_SERVICE";


let initialState = {
    id: null,
    email: null,
    login: null,
    photos: "https://im0-tub-ru.yandex.net/i?id=2f39626df22133cefe36a721bd92313f&n=13&exp=1",
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photos: action.photo
            };
        case AUTHORIZE_ON_SERVICE:
            return {
                ...state,
                id:action.id
            };
        default:
            return state;
    }

};


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo: photo});
export const uthorizeOnService = (id) => ({type: AUTHORIZE_ON_SERVICE, id:id});


export const setAuthUserThunkCreator = () => {
    return (dispatch) => {
        headerAPI.getUserLogin().then(data => {
            if (data.resultCode === 0) {
                let id = data.data.id;
                let login = data.data.login;
                let email = data.data.email;
                dispatch(setAuthUserData(id, login, email));
                headerAPI.getUserLoginPhoto(id).then(photos => {
                    dispatch(setAuthUserPhoto(photos.small));
                });

            }

        })
    };
};

export const authorizeOnServiceThunkCreator = (authorizeData) => {
    return (dispatch) => {
        headerAPI.authorizeOnService(authorizeData).then(data => {
            debugger;
            if (data.resultCode === 0) {
                dispatch(setAuthUserThunkCreator())
            }
        })
    }
};

export default authReducer;