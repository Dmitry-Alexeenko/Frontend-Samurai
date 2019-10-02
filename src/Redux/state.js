

let state = {
    profilePage:{              //типа ветки. Как правило одна ветка обсуж какую-то одну страницу
        posts: [
            {id:1, message:"Dorow, my name is React", likesCount:1},
            {id:2, message:"It is first post", likesCount:16},
            {id:3, message:"It is thirst post", likesCount:9},
            {id:3, message:"yes", likesCount:111}
        ]
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
        ]
    },
    sideBar:{}
};

export default state;

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
