import {TaskManagerAPI} from "../../api/api";
import {actions} from "../actions";
import {initialState} from "../initialStates/taskManagerInitState";

const taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_FOLDER_LIST:
            return {
                ...state,
                taskFolders: [...action.folders],
            };


        default:
            return state;
    }
};

const addFolderList = (folders) => ({type: actions.SHOW_FOLDER_LIST, folders: folders});
const addNewFolderList = (folders) => ({type: actions.SHOW_FOLDER_LIST, folders: folders});

export const showFolderList = () => {
    return async (dispatch) => {
        try {
            let response = await TaskManagerAPI.getTaskList();
            dispatch(addFolderList(response.data));
        } catch (e) {
            console.error(e)
            console.error('Кажется проблемы с интернетом')
        }
    }
};

export const createNewFolderList = (title) => {
    return async (dispatch) => {
        try {
            let response = await TaskManagerAPI.addNewTaskList(title);
            debugger
            //dispatch(addNewFolderList(response.data));
        } catch (e) {
            console.error(e)
            console.error('Кажется проблемы с интернетом')
        }
    }
};

export default taskManagerReducer;