import {actions} from "../actions";
import {initialState} from "../initialStates/dialogsInitState";

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case actions.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:99, message:action.formData.newMessageBody}] //добавляем элемент в messages  за место push
            };
        default:
            return state;
    }
};

export const addMessage = (formData) => ({type:actions.ADD_MESSAGE, formData:formData});

export default dialogsReducer;