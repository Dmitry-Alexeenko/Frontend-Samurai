import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DIalogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return(
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.sideBar}/>
            <div className="app-wrapper__content">

                <Route path='/profile' render={() => <ProfileContainer/>}/> {/*Так пропсы можно прокинуть*/}
                <Route path='/dialogs' render={() => <DialogsContainer/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
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


export default App; // экспортируем код в другие файлы default экспортирует все.
