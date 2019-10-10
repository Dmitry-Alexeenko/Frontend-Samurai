import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({  //передаем этой функции наши редюсоры. импортим из библиотеки redux
    profilePage: profileReducer,  //юда приходит state от редюсеров. и все это упаковывается в общий state
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
});


let store = createStore(reducers); //создаем функцию и импортим createStore из библиотеки redux
                                    //автоматически createStore создает внутри себя state у которого есть 3 свойства(reducers)

export default store;
