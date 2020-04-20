import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import taskManagerReducer from "./reducers/taskManager-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    taskManager: taskManagerReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.__store__ = store;
export default store;
