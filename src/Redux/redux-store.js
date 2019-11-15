import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({  //передаем этой функции наши редюсоры. импортим из библиотеки redux
    profilePage: profileReducer,  //юда приходит state от редюсеров. и все это упаковывается в общий state
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

//thunkMiddleware- промежуточный уровень
//автоматически createStore создает внутри себя state у которого есть 3 свойства(reducers)
window.__store__ = store;
export default store;
