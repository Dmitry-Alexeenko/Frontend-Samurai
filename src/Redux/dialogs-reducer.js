const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initialState = {
    messages: [
        {id:1, message:"Hi, my name is Dima."},
        {id:2, message:"Hi, my name is Anton."},
        {id:3, message:"How are you?"},
        {id:4, message:"not bad"},
        {id:5, message:"ok"},
        {id:6, message:"okokok"}
    ],
    users: [
        {id:1, name:"Dimas"},
        {id:2, name:"Alex"},
        {id:3, name:"Sergy"},
        {id:4, name:"Anton"},
        {id:5, name:"Kate"},
        {id:6, name:"Mark"}
    ],
    textNewMessages:""
};

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                textNewMessages: "",
                messages: [...state.messages, {id:99, message:state.textNewMessages}] //добавляем элемент в messages  за место push
            };
        case CHANGE_MESSAGE:
            return {
                ...state,
                textNewMessages: action.newText
            };
        default:                          //но если ничего не изм то вывод надо сделать по умолчанию
            return state;
    }
};

export const addMessageCreator = () => ({type:ADD_MESSAGE});
export const changeMessageCreator = (text) => ({type:CHANGE_MESSAGE, newText:text});

export default dialogsReducer;