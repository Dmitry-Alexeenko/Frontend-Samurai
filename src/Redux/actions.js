export const actions = {
    //app actions
    SET_INITIALIZED_SUCCESS: "social_network/app/SET_INITIALIZED_SUCCESS",

    //auth actions
    SET_USER_DATA: "social_network/auth/SET_USER_DATA",
    GET_CAPTCHA: "social_network/auth/GET-CAPTCHA",
    SET_USER_PHOTO: "social_network/auth/SET_USER_PHOTO",
    AUTHORIZE_ON_SERVICE: "social_network/auth/AUTHORIZE_ON_SERVICE",

    //dialogs actions
    ADD_MESSAGE: "social_network/dialogs/ADD-MESSAGE",

    //profile actions
    ADD_POST: "social_network/profile/ADD-POST",
    SET_USER_PROFILE: 'social_network/profile/SET_USER_PROFILE',
    ADD_USER_STATUS: "social_network/profile/ADD_USER_STATUS",
    SAVE_PHOTO_SUCCESS: "social_network/profile/SAVE-PHOTO-SUCCESS",

    //users actions
    SUBSCRIBE: "social_network/users/SUBSCRIBE",
    UNSUBSCRIBE: 'social_network/users/UNSUBSCRIBE',
    SET_USERS: "social_network/users/SET_USERS",
    SET_CURRENT_PAGE: "social_network/users/SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT: "social_network/users/SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING: "social_network/users/TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS: "social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS",

};