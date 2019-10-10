const ADD_POST = "ADD-POST";
const CHANGE_POST = 'CHANGE-POST';

let initialState = { //для стартовых данных. типа заготовка, что бы profileReducer в state что нибудь пришло
    posts: [
        {id:1, message:"Dorow, my name is React", likesCount:1},
        {id:2, message:"It is first post", likesCount:16},
        {id:3, message:"It is thirst post", likesCount:9},
        {id:3, message:"yes", likesCount:111}
    ],
    textNewPost:""
};

const profileReducer = (state = initialState, action)=> { // изначально state не может придти, т.к у redux его нет, поэтому мы передаем initialState для первой инициальзации

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.textNewPost,
                likesCount:7
            };
            state.posts.push(newPost);
            state.textNewPost = "";
            return state;                //после каждого case надо ставить break, иначе switch продолжит выполняться
        case CHANGE_POST:                //но я поставил return, без него или break будет ошибка
            state.textNewPost = action.newText;
            return state;
        default:                        //но если ничего не изм то вывод надо сделать по умолчанию
            return state;
    }

};

export const addPostCreator = () => ({type:ADD_POST});
export const changeTextCreator = (text) => ({type:CHANGE_POST, newText:text});

export default profileReducer;