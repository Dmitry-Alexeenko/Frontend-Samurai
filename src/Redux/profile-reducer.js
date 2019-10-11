const ADD_POST = "ADD-POST";
const CHANGE_POST = 'CHANGE-POST';

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    posts: [
        {id: 1, message: "Dorow, my name is React", likesCount: 1},
        {id: 2, message: "It is first post", likesCount: 16},
        {id: 3, message: "It is thirst post", likesCount: 9},
        {id: 3, message: "yes", likesCount: 111}
    ],
    textNewPost: ""
};

const profileReducer = (state = initialState, action) => { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации
    switch (action.type) {
        case ADD_POST:
            return {...state,
                posts: [...state.posts, {id: 5, message: state.textNewPost, likesCount: 7}],
                textNewPost: ""
            };
        case CHANGE_POST:
            return {...state,
                textNewPost: action.newText};
        default:                        //но если ничего не изм то вывод надо сделать по умолчанию
            return state;
    }

};

export const addPostCreator = () => ({type: ADD_POST});
export const changeTextCreator = (text) => ({type: CHANGE_POST, newText: text});

export default profileReducer;