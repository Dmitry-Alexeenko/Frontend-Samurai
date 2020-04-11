import React, {useEffect} from 'react';
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
import {Layout, Row} from 'antd';
import 'antd/dist/antd.css';
import useBreakpoint from "./custom_hook/useBreakpoint";
import Algorithms from "./components/Education/Algorithms";

const News = React.lazy(() => import ("./components/News/News"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));


const App = (props) => {

    const screenWidth = useBreakpoint();

    const color = '#001529';
    const {Footer, Sider, Content} = Layout;
    const {initialized, initializeApp} = props;

    const catchAllErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    };

    useEffect(() => {
        initializeApp();
        window.addEventListener('unhandledrejection', catchAllErrors)
        return () => window.removeEventListener('unhandledrejection', catchAllErrors);
    }, [initializeApp]);

    if (!initialized) {
        return (
            <div className={c.app_preloader}>
                <Preloader/>
            </div>
        )
    }

    return (
        <div className={c.app_wrapper}>

            <HeaderContainer/>

            <Layout className={c.page_Main}>

                <Sider theme={'dark'} collapsed={screenWidth === 'xs'} style={{
                    position: 'fixed',  overflow: 'auto', height:'100vh', paddingTop:'40px',top:0

                }}>
                    <NavBar/>
                </Sider>

                <Content    style={{marginLeft: screenWidth !== 'xs' ? '215px' : '96px', marginRight: '15px', minHeight:'100vh', }}>
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
        </div>

    );

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
