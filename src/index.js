import * as serviceWorker from './utils/serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppContainer from './App'

ReactDOM.render(<AppContainer/>, document.getElementById('root'));

serviceWorker.unregister();
