

let store = {
    _rerenderEntireTree () {
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
            textNewPost:"uuuuuuuuu"
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
            textNewMessages:"uuuuuuuuu"
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

    addPost () {
        let newPost = {id:5, message:this.profilePage.textNewPost, likesCount:7};
        this.profilePage.posts.push(newPost);
        this.profilePage.textNewPost = "";
        this._rerenderEntireTree();
    },

    changeText (change) {
        this.profilePage.textNewPost = change;
        this._rerenderEntireTree();
    },

    addMessage () {
        let newMessage = {id:99, message:this.dialogsPage.textNewMessages};
        this.dialogsPage.messages.push(newMessage);
        this.dialogsPage.textNewMessages = "";
        this._rerenderEntireTree();
    },

    changeMessage (change) {
        this.dialogsPage.textNewMessages = change;
        this._rerenderEntireTree();
    },

    subscribe (observer) {
        this._rerenderEntireTree = observer; //паттерн наблюдатель(observer)
    }
}