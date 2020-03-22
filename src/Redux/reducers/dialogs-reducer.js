import {actions} from "../actions";
import {initialState} from "../initialStates/dialogsInitState";
import {dialogsAPI} from "../../api/api";

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 99, message: action.formData.newMessageBody}]
            };
        case actions.ADD_ALL_DIALOGS:
            return {
                ...state,
                listAllDialogs: [...action.listDialogs]
            };
        case actions.GET_LIST_MESSAGES:
            return {
                ...state,
                messages: [...action.listMessages.items],
                totalCountMessages: action.listMessages.totalCount
            };
        default:
            return state;
    }
};

export const addMessage = (formData) => ({type: actions.ADD_MESSAGE, formData: formData});
export const addAllDialogs = (listDialogs) => ({type: actions.ADD_ALL_DIALOGS, listDialogs: listDialogs});
export const getListMessagesFromUser = (listMessages) => ({
    type: actions.GET_LIST_MESSAGES,
    listMessages: listMessages
});
export const sendMessageToUser = (listMessages) => ({
    type: actions.GET_LIST_MESSAGES,
    listMessages: listMessages
});


export const startDialog = (userId) => {
    return async (dispatch) => {

        let response = await dialogsAPI.startDialogs(userId)
        if (response.data.resultCode === 0) {
            dispatch(getAllDialogs())

        }
    }
};

export const getAllDialogs = () => {
    return async (dispatch) => {
        let response = await dialogsAPI.getAllDialogs();
        dispatch(addAllDialogs(response.data));
    }
};

export const getListMessages = (userId) => {
    return async (dispatch) => {
        let response = await dialogsAPI.getListMessages(userId);
        dispatch(getListMessagesFromUser(response.data));
    }
};

export const sendMessage = (userId, message) => {
    return async (dispatch) => {
        debugger
        let response = await dialogsAPI.sendMessage(userId, message);
        //dispatch(sendMessageToUser(response.data));
    }
};

export default dialogsReducer;