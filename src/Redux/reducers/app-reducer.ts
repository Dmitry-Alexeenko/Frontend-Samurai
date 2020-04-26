import {setAuthUser} from "./auth-reducer";
import {actions} from "../actions";
import {initialState, InitialStateType} from "../initialStates/appInitState";

//Для appReducer значение на выходе будет InitialStateType
//: InitialStateType - тип который возвращается
const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case actions.SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

//typeof - значит строго SET_INITIALIZED_SUCCESS и ничего другого
type initializedSuccessActionType = {
    type: typeof actions.SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: actions.SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setAuthUser());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer;