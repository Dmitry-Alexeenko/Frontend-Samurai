import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _callSubscriber () {
        console.log("no observers");                                       //функция в кот записывается обновл всей нашей системы. Функция без рабно и стрелки- это такой синтаксис определения методов
    },
    _state: {                                                              //наше хранилище. Это свойство
        profilePage:{
            posts: [
                {id:1, message:"Dorow, my name is React", likesCount:1},
                {id:2, message:"It is first post", likesCount:16},
                {id:3, message:"It is thirst post", likesCount:9},
                {id:3, message:"yes", likesCount:111}
            ],
            textNewPost:""
        },
        dialogsPage:{
            messages: [
                {id:1, message:"Hi, my name is Dima."},
                {id:2, message:"Hi, my name is Anton."},
                {id:3, message:"How are you?"},
                {id:4, message:"not bad"},
                {id:5, message:"ok"},
                {id:6, message:"okokok"}
            ],
            users: [
                {id:1, name:"Dimas"},
                {id:2, name:"Alex"},
                {id:3, name:"Sergy"},
                {id:4, name:"Anton"},
                {id:5, name:"Kate"},
                {id:6, name:"Mark"}
            ],
            textNewMessages:""
        },
        sideBar:{
            user:[
                {id:1, name:"Kate"},
                {id:2, name:"Valera"},
                {id:3, name:"Mark"}
            ]
        }
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //паттерн наблюдатель(observer)
    },

    dispatch(action){ //action это объект который мы диспатчим. У него обязон должен быть тип {type:""}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber();
    }
};






export default store;
window.store = store;
