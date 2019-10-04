import {rerenderEntireTree} from "../render";


let state = {
    profilePage:{              //типа ветки. Как правило одна ветка обсуж какую-то одну страницу
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
};
export let addPost = () => {    //экспортируем только эту функцию, импорт будет через фигурные скобки
    let newPost = {id:5, message:state.profilePage.textNewPost, likesCount:7};
    state.profilePage.posts.push(newPost);
    state.profilePage.textNewPost = "";
    rerenderEntireTree(state, addPost, changeText , changeMessage, addMessage);
};

export let changeText = (change) => {    //экспортируем только эту функцию, импорт будет через фигурные скобки
    state.profilePage.textNewPost = change;
    rerenderEntireTree(state, addPost, changeText, changeMessage, addMessage );
};

export let addMessage = () => {    //экспортируем только эту функцию, импорт будет через фигурные скобки
    let newMessage = {id:99, message:state.dialogsPage.textNewMessages};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.textNewMessages = "";
    rerenderEntireTree(state, addPost, changeText , changeMessage, addMessage);
};

export let changeMessage = (change) => {    //экспортируем только эту функцию, импорт будет через фигурные скобки
    state.dialogsPage.textNewMessages = change;
    rerenderEntireTree(state, addPost, changeText, changeMessage, addMessage );
};



export default state;
/*
sideBar:{
    users:[
        {id:1, name:"Kate"},
        {id:2, name:"Valera"},
        {id:3, name:"Mark"}
    ]
}*/

/*
let posts = [
    {id:1, message:"Dorow, my name is React", likesCount:1},
    {id:2, message:"It is first post", likesCount:16},
    {id:3, message:"It is thirst post", likesCount:9},
    {id:3, message:"yes", likesCount:111}
];

let users = [                     //по сути это BLL, тут хранятся данные
    {id:1, name:"Dimas"},
    {id:2, name:"Alex"},
    {id:3, name:"Sergy"},
    {id:4, name:"Anton"},
    {id:5, name:"Kate"},
    {id:6, name:"Mark"}
];

let messages = [
    {id:1, message:"Hi, my name is Dima."},
    {id:2, message:"Hi, my name is Anton."},
    {id:3, message:"How are you?"},
    {id:4, message:"not bad"},
    {id:5, message:"ok"},
    {id:6, message:"okokok"}
];*/
