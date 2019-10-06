const ADD_POST = "ADD-POST";
const CHANGE_POST = 'CHANGE-POST';
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

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
        if(action.type === ADD_POST) {
            let newPost = {
                id:5,
                message:this._state.profilePage.textNewPost,
                likesCount:7
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textNewPost = "";
            this._callSubscriber();
        }
        else if (action.type === CHANGE_POST) {
            this._state.profilePage.textNewPost = action.newText;
            this._callSubscriber();
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id:99,
                message:this._state.dialogsPage.textNewMessages
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.textNewMessages = "";
            this._callSubscriber();
        }
        else if (action.type === CHANGE_MESSAGE) {
            this._state.dialogsPage.textNewMessages = action.newText;
            this._callSubscriber();
        }
    }
};

export const addPostActionCreator = () => ({type:ADD_POST});
export const changeTextActionCreator = (text) => ({type:CHANGE_POST, newText:text});

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const changeMessageActionCreator = (text) => ({type:CHANGE_MESSAGE, newText:text});


export default store;
window.store = store;
