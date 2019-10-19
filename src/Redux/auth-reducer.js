const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";



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
        default:
            return state;
    }

};


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo:photo});


export default authReducer;