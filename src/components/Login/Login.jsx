import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*Действия: форма вызвала handleSubmit из LoginReduxForm, внутри handleSubmit вызовется то что пришло
             в LoginReduxForm т.е props.onSubmit, и в этот onSubmit придут данные собранные контейнерной компонентой для меня*/}
            {/*handleSubmit сделает 3 действия e.preventDefault, сбор всех данных и все упаковывается в объект и вызывается
            из контейнерной компоненты onSubmit(formData)- что бы сообщить во внейший мир что данные засобмитили из формы*/}
            <div>
                {/*name нужно для того что бы каждый элемент отпралялся под каким то именем, т.е форма- это объект, а name это свойства формы*/}
                <Field placeholder={"login"} name={"login"} component={"input"}/>{/*меняю input на Field*/}
            </div>
            <div>
                <Field placeholder={"Password"} name={"Password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"} /> remember me Field {/*пишу каким типом он должен быть*/}
            </div>
            <div>
                <button> Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login' //уникальное название конкретно для этой формы
})(LoginForm); //передаем ту форму, вокруг которой нужно создать redux-form

const Login = (props) => {
    const onSubmit = (formData) => {  //сюда придут все значения из формы
        console.log(formData) //теперь эти данные можно через санку отправь на сервак
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

};
export default Login;