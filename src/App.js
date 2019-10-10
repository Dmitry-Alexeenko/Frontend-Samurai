import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";

const App = (props) => {
    return(
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.sideBar}/>
            <div className="app-wrapper__content">

                <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/> {/*Так пропсы можно прокинуть*/}
                <Route path='/dialogs' render={() => <DialogsContainer state={props.state.dialogsPage} dispatch={props.dispatch}/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
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


export default App; // экспортируем код в другие файлы default экспортирует все.
