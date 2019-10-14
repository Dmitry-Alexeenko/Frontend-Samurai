const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

};


export const followCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersCreater = (users) => ({type: SET_USERS, users: users});

export default usersReducer;