const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    users: [
        {id: 1, followed: false, fullName:"Dmitry", status: "Dorow, i learn React js", location:{country: "Russia", city: "Kazan"} },
        {id: 2, followed: true, fullName:"Gray", status: "Dorow, i am Gray", location:{country: "Russia", city: "moscow"} },
        {id: 3, followed: false, fullName:"Valera", status: "Che, eta", location:{country: "Russia", city: "Zalupinsk"} }
    ],
    textNewPost: ""
};

const usersReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users:[...state.users] т.е этот вариант с нижним идентичные
                users:state.users.map(u => {     //пробегаемся по массиву users и .map создает новый массив элементами которого будут сидеть все те же самые users
                    if (u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
        default:
            return state;
    }

};

export const followCreator = (userId) => ({type: FOLLOW, userId:userId});
export const unFollowCreator = (userId) => ({type: UNFOLLOW, userId:userId});

export default usersReducer;