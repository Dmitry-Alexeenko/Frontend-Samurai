import React from 'react';
import c from './App.module.scss';
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./Redux/redux-store";
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {WithSuspense} from "./hoc/withSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeAppThunkCreator} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


//import News from "./components/News/News";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const News = React.lazy(() => import ("./components/News/News")); //загрузится когда понадобится
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer")); //загрузится когда понадобится

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
    }

    render() {
        if (!this.props.initialized) {
            return <div className={c.app_preloader}><Preloader/></div>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className={c.page_Main}>
                    <div className={c.navBar}>
                        <Navbar state={this.props.state.sideBar}/>
                    </div>
                    <div className={c.content}>
                        <Route exact path='/' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?'
                               render={WithSuspense(ProfileContainer)}/> {/*Так пропсы можно прокинуть*/}
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={WithSuspense(News)}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>

                        {/*<Route path='/profile' component={Profile}/>             !!!!!через  них пропсы не прокинешь
                    <Route path='/dialogs' component={Dialogs}/> path смотрит на адресную строку. если адрес его, то он вкл
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                    </div>
                </main>
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
        <HashRouter>  {/*HashRouter использую для того что бы все нормально работало в github*/}
            <Provider store={store}>
                <AppContainer state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </HashRouter>);
};
{/*bind означает что я захардкодил this у этой функции. И при ее вызове она будет обращаться к store, а не к пропсу*/
}
export default SocialNetworkApp;
