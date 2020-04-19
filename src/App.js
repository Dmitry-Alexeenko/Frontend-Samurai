import React, {useEffect} from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import NavBar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {WithSuspense} from "./hoc/withSuspense";
import Login from "./components/Login/Login";
import {initializeApp} from "./Redux/reducers/app-reducer";
import useBreakpoint from "./custom_hook/useBreakpoint";
import Algorithms from "./components/Education/Algorithms";
import Header from "./components/Header/Header";
import PreloaderApp from "./components/common/Preloader/PreloaderApp";
import {useSelector, useDispatch} from "react-redux";
import {createUseStyles, useTheme, ThemeProvider} from "react-jss";

const News = React.lazy(() => import ("./components/News/News"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));


const App = (props) => {
    const initialized = useSelector(state => state.app.initialized);
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles({theme});

    const catchAllErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    };

    useEffect(() => {
        dispatch(initializeApp());
        window.addEventListener('unhandledrejection', catchAllErrors)
        return () => window.removeEventListener('unhandledrejection', catchAllErrors);
    }, [initializeApp]);

    if (!initialized) {
        return <PreloaderApp/>
    }

    return (
        <div className={classes.App}>
            <Header/>
            <div className={classes.App__Container}>
                <div className={classes.App__Content}>

                    <NavBar/>

                    <div className={classes.App__Router}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    App: {
        display: 'flex',
        width: '100%',
        backgroundColor: ({theme}) => theme.backGroundDark,
        color: 'black',
        minHeight: '100vh',
    },
    App__Container: {
        color: 'white',
        height: 'auto',
        width: '100%',
    },
    App__Content: {
        minWidth: 300,
        maxWidth: 1000,
        margin: '0 auto',
    },
    App__Router: {
        marginLeft: ({theme}) => theme.screenWidth !== 'xs' ? '170px' : '70px',
        transition: '0.1s all'
    },
});


const AppContainer = () => {

    //hook который срабатывает при определенном разрешении экрана
    const screenWidth = useBreakpoint();

    const theme = {
        backGroundLight: 'grey',
        //backGroundDark: '#001529',
        backGroundDark: '#000c18',
        colorLight: 'black',
        colorDark: 'white',
        screenWidth: screenWidth,
    }
    return (
        //HashRouter использую для того что бы все нормально работало в github
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </Provider>
        </HashRouter>);
};

export default AppContainer;
