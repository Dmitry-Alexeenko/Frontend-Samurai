import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authorizeOnServiceThunkCreator} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {requireField} from "../../utils/validators/validators";
import {LoginInput} from "../common/FormsControls/FormsControls";
import Redirect from "react-router-dom/es/Redirect";
import c from './Login.module.scss';

const LoginForm = ({handleSubmit, error}) => { //деструктуризация пропсов. Пишу то что нужно взять
    return (
        <form onSubmit={handleSubmit}>
            {/*Действия: форма вызвала handleSubmit из LoginReduxForm, внутри handleSubmit вызовется то что пришло
             в LoginReduxForm т.е props.onSubmit, и в этот onSubmit придут данные собранные контейнерной компонентой для меня*/}
            {/*handleSubmit сделает 3 действия e.preventDefault, сбор всех данных и все упаковывается в объект и вызывается
            из контейнерной компоненты onSubmit(formData)- что бы сообщить во внейший мир что данные засобмитили из формы*/}
            <div>
                {/*name нужно для того что бы каждый элемент отпралялся под каким то именем, т.е форма- это объект, а name это свойства формы*/}
                <Field className={c.loginForm__input} placeholder={"login"} name={"login"} component={LoginInput}
                       validate={[requireField]}/>{/*меняю input на Field*/}
            </div>
            <div>
                <Field className={c.loginForm__input} placeholder={"Password"} name={"Password"} component={LoginInput} type="password"
                       validate={[requireField]}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"}/> remember
                me {/*пишу каким типом он должен быть*/}
            </div>
            {error && <div className={c.loginForm__error}> {/*если props.error - true, тогда выводится div*/}
                {error}
            </div>}
            <div>
                <button className={c.loginForm__btn}> Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login' //уникальное название конкретно для этой формы
})(LoginForm); //передаем ту форму, вокруг которой нужно создать redux-form

const Login = (props) => {
    const onSubmit = (formData) => {  //сюда придут все значения из формы
        console.log(formData); //теперь эти данные можно через санку отправь на сервак но сначала надо сделать коннект
        props.authorizeOnServiceThunkCreator(formData)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={c.loginPage}>
            <div className={c.loginPage__item}>
                <h1 className={c.loginPage__title}>Log in</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={c.loginPage__item}>
                <div className={c.loginPage__text}>
                    Если вы хотетите посетить данное приложение и посмотреть как все работает
                    введитите: <br/>
                    <span className={c.loginPage__data}> Email: free@samuraijs.com </span><br/>
                    <span className={c.loginPage__data}>  Password: free</span><br/>
                    Это тестовый аккаунт.
                </div>
            </div>
        </div>
    )

};
const mapStateToProps = (state) => {
    return ({isAuth: state.auth.isAuth})
};
export default connect(mapStateToProps, {authorizeOnServiceThunkCreator})(Login);