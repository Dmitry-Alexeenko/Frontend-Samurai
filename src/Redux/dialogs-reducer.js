const ADD_MESSAGE = "social_network/dialogs/ADD-MESSAGE";

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
    ]
};

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:99, message:action.formData.newMessageBody}] //добавляем элемент в messages  за место push
            };
        default:
            return state;
    }
};

export const addMessage = (formData) => ({type:ADD_MESSAGE, formData:formData});

export default dialogsReducer;