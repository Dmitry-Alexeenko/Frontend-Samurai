import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authorizeOnService} from "../../Redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {requireField} from "../../utils/validators/validators";
import {LoginInput} from "../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";
import c from './Login.module.scss';

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*Действия: форма вызвала handleSubmit из LoginReduxForm, внутри handleSubmit вызовется то что пришло
             в LoginReduxForm т.е props.onSubmit, и в этот onSubmit придут данные собранные контейнерной компонентой для меня*/}
            {/*handleSubmit сделает 3 действия e.preventDefault, сбор всех данных и все упаковывается в объект и вызывается
            из контейнерной компоненты onSubmit(formData)- что бы сообщить во внейший мир что данные засобмитили из формы*/}
            <div>
                {/*name нужно для того что бы каждый элемент отпралялся под каким то именем, т.е форма- это объект, а name это свойства формы*/}
                <Field className={c.loginForm__input} placeholder={"login"} name={"login"} component={LoginInput}
                       validate={[requireField]}/>
            </div>
            <div>
                <Field className={c.loginForm__input} placeholder={"Password"} name={"Password"} component={LoginInput} type="password"
                       validate={[requireField]}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"}/> remember
                me
            </div>

            {captcha && <img src={captcha} alt="captcha"/>}
            {captcha && <Field component={"input"} type="text" name={"captcha"} validate={[requireField]}/>}

            {error && <div className={c.loginForm__error}>
                {error}
            </div>}
            <div>
                <button className={c.loginForm__btn}> Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    let {isAuth, captcha} = props;
    let {authorizeOnService} = props;

    const onSubmit = (formData) => {
        authorizeOnService(formData)
    };

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={c.loginPage}>
            <div className={c.loginPage__item}>
                <h1 className={c.loginPage__title}>Log in</h1>
                <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
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
    return ({
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    })
};
export default connect(mapStateToProps, {authorizeOnService})(Login);