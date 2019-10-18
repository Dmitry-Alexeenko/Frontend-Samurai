const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = 'UNFOLLOW';


let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }

};


export const setAuthUserData = (id, login, email ) => ({type: SET_USER_DATA, data: {id, login, email}});


export default authReducer;