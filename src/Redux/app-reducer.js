import {setAuthUserThunkCreator} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS= "SET_INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(setAuthUserThunkCreator()); //когда будет много промисов, нужно обвеннуть в массив НУЖНО что бы сюда вернулся промис
    Promise.all([promise]).then(() => { // поэтому в setAuthUserThunkCreator надо добавить return, потом нужно вызвать Promise.all([promise])
        //then вызывается у all
        dispatch(initializedSuccess())
    })
};

export default appReducer;