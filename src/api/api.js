import * as axios from "axios/index";

const instance = axios.create(  //настраиваю axios
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true, //благодаря этому true кука цепляется //добавляем элементы, еоторые нам нужны
        headers: {  //все запросы кроме гет требуют обязат ключа доступа. с каждым запросом на сервак отправляются и возвращ заголовки
            "API-KEY": "a3b59b28-fda3-496d-8604-62213f44ac80" //значение ключа который я взял с API
        }
    }
);

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) { //возврашает промис. axios меняем на instance и все что надо уже лежит там*/
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollowAtUser(id) { //возврашает промис
        return (/*тут withCredentials как и в get запроса  передаем 2-м параметром*/
            instance.delete(`follow/${id}`)
        )
    },
    followAtUser(id) { //возврашает промис
        return (/*тут withCredentials в отличии от get запроса ты передаем 3-м параметром*/
            instance.post(`follow/${id}`, {})
        )
    }
};

export const profileAPI = {
    getUserProfile(userId) { //возврашает промис
        return (
            instance.get(`profile/` + userId)
        )
    },
    getUserStatus(userId) { //возврашает промис
        return (
            instance.get(`/profile/status/` + userId)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`/profile/status`, {status: status}))
    },
    savePhoto(PhotoFile) {
        const formData = new FormData();
        formData.append('image', PhotoFile);
        return (
            instance.put(`/profile/photo`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }))
    },
    saveProfile(profile) {
        return (
        instance.put(`/profile`, profile))
    }
};

export const headerAPI = {
    getUserLogin() {
        return (
            instance.get(`auth/me`)
        )
        /*если кросдоменные запросы, то браузер не отправляет куку автоматически
        * поэтому вторым параметром передаем withCredentials и если сервак поддерживает то на него уйдет запрос*/
    },
    getUserLoginPhoto(id) {
        return (
            instance.get(`profile/` + id).then(response => response.data.photos)
        )
    },
    authorizeOnService(authorizeData) {
        let email = authorizeData.login;
        let password = authorizeData.Password;
        let rememberMe = authorizeData.rememberMe;
        let captcha = true;
        return (
            instance.post(`auth/login`,{email:email,  password:password,  rememberMe:rememberMe, captcha:captcha})
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
};

