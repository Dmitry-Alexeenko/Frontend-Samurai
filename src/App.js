import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/DIalogs";
import {BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Route from "react-router-dom/es/Route";


// эта функц возвр JSX разметку(html встр в js) это компонента(app)

const App = (props) => {
    debugger;
    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper__content">

                <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/> {/*Так пропсы можно прокинуть*/}
                <Route path='/dialogs' render={() => <Dialogs userss={props.state.dialogsPage.users}
                                                              messagess={props.state.dialogsPage.messages}/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                {/*<Route path='/profile' component={Profile}/>             !!!!!через  них пропсы не прокинешь
                    <Route path='/dialogs' component={Dialogs}/> path смотрит на адресную строку. если адрес его, то он вкл
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    </BrowserRouter>;
}


export default App; // экспортируем код в другие файлы default экспортирует все.
