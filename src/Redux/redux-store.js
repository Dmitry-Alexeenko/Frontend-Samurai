import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({  //передаем этой функции наши редюсоры. импортим из библиотеки redux
    profilePage: profileReducer,  //юда приходит state от редюсеров. и все это упаковывается в общий state
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //thunkMiddleware- промежуточный уровень
//автоматически createStore создает внутри себя state у которого есть 3 свойства(reducers)
window.store = store;
export default store;
