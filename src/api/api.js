import * as axios from "axios/index";

const instance = axios.create(  //настраиваю axios
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,  //добавляем элементы, еоторые нам нужны
        headers: {  //все запросы кроме гет требуют обязат ключа доступа. с каждым запросом на сервак отправляются и возвращ заголовки
            "API-KEY": "1a2f890d-63df-4bc9-b670-fa43a5c6e581" //значение ключа который я взял с API
        }
    }
);

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) { //возврашает промис. axios меняем на instance и все что надо уже лежит там*/
        return (
            instance.get(`users?page=${currentPage}  
            &count=${pageSize}`).then(response => response.data)
        )
    },
    unfollowAtUser(id) { //возврашает промис
        return (/*тут withCredentials как и в get запроса  передаем 2-м параметром*/
            instance.delete(`follow/${id}`).then(response => response.data)
        )
    },
    followAtUser(id) { //возврашает промис
        return (/*тут withCredentials в отличии от get запроса ты передаем 3-м параметром*/
            instance.post(`follow/${id}`, {}).then(response => response.data)
        )
    }
};

export const profileAPI = {
    getUserProfile(userId) { //возврашает промис
        return (
            instance.get(`profile/` + userId).then(response => response.data)
        )
    }
};

export const headerAPI = {
    getUserLogin() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
        /*если кросдоменные запросы, то браузер не отправляет куку автоматически
        * поэтому вторым параметром передаем withCredentials и если сервак поддерживает то на него уйдет запрос*/
    },
    getUserLoginPhoto(id) {
        return (
            instance.get(`profile/` + id).then(response => response.data.photos)
        )
    }
};
