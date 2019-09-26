import React from 'react'; // импортируем модуль из node modules без ./ он добавл во все файлы
import './App.css'; // подкл стили;
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';




// эта функц возвр JSX разметку(html встр в js) это компонента(app)
const App = () => {
  return (  // className-назначение классна за место class; на ретурне долж быть только один элемент на вывод
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}




export default App; // экспортируем код в другие файлы default экспортирует все.
