export type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    photos: any,
    isAuth: boolean,
    captcha: string | null
}

export let initialState:initialStateType = {
    id: null,
    email: null,
    login: null,
    photos: null,
    isAuth: false,
    captcha: null
};