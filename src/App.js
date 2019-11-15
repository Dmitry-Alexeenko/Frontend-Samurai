import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.state.sideBar}/>
                <div className="app-wrapper__content">

                    <Route path='/login' render={() => <Login/>}/> {/*Так пропсы можно прокинуть*/}
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/> {/*Так пропсы можно прокинуть*/}
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    {/*<Route path='/profile' component={Profile}/>             !!!!!через  них пропсы не прокинешь
                    <Route path='/dialogs' component={Dialogs}/> path смотрит на адресную строку. если адрес его, то он вкл
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                </div>
            </div>)
            ;
    }
}

const mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    })
};

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator}))
(App);

const SocialNetworkApp = () => {
    return (
        <BrowserRouter>  {/*bind означает что ты захардкодили this у этой функции. И при ее вызове она будет обращаться к store, а не к пропсу*/}
            <Provider store={store}>
                <AppContainer state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>);
};

export default SocialNetworkApp;
