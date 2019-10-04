import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/DIalogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";




// эта функц возвр JSX разметку(html встр в js) это компонента(app)

const App = (props) => {

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.sideBar}/>
            <div className="app-wrapper__content">

                <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/> {/*Так пропсы можно прокинуть*/}
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/> {/*path смотрит на адресную строку. если адрес его, то он вкл*/}
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
