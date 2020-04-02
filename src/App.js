import React from 'react';
import c from './styles/App.module.scss';
import {HashRouter, Route, Switch, withRouter, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./Redux/redux-store";
import NavBar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {WithSuspense} from "./hoc/withSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./Redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Algorithms from "./components/Education/Education";
import {Layout, Row, Col,} from 'antd';
import 'antd/dist/antd.css';

const News = React.lazy(() => import ("./components/News/News"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));

class App extends React.Component {

    catchAllErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllErrors)
    }

    render() {

        const {Header, Footer, Sider, Content} = Layout;

        if (!this.props.initialized) {
            return (
                <div className={c.app_preloader}>
                    <Preloader/>
                </div>
            )
        }

        return (
            <Layout style={{backgroundColor: '#edeef0', minHeight:'100vh'}} className="app-wrapper">

                <HeaderContainer/>

                <Layout className={c.page_Main}>

                    <Sider theme={'dark'} collapsed={true}>
                        <NavBar/>
                    </Sider>

                    <Content>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={WithSuspense(News)}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/algorithms' render={() => <Algorithms/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </Content>

                </Layout>

                <Footer style={{backgroundColor: '#001529'}}>Footer</Footer>

            </Layout>

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
                <AppContainer/>
            </Provider>
        </HashRouter>);
};

export default SocialNetworkApp;
