import React from 'react';
import c from './styles/App.module.scss';
import {HashRouter, Route, Switch, withRouter, Redirect} from "react-router-dom";
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
import {initializeApp} from "./Redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const News = React.lazy(() => import ("./components/News/News"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));

class App extends React.Component {

    catchAllErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection',  this.catchAllErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',  this.catchAllErrors)
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className={c.app_preloader}>
                    <Preloader/>
                </div>
            )
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>

                <main className={c.page_Main}>

                    <div className={c.navBar}>
                        <Navbar state={this.props.state.sideBar}/>
                    </div>

                    <div className={c.content}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to ={'/profile'}/> }/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={WithSuspense(News)}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>

                </main>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    })
};

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SocialNetworkApp = () => {
    return (
        //HashRouter использую для того что бы все нормально работало в github
        <HashRouter>
            <Provider store={store}>
                <AppContainer state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </HashRouter>);
};

export default SocialNetworkApp;
