import {setAuthUser} from "./auth-reducer";
import {actions} from "../actions";
import {initialState} from "../initialStates/appInitState";

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({type: actions.SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUser());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer;