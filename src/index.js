import * as serviceWorker from './utils/serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SocialNetworkApp from './App'

ReactDOM.render(<SocialNetworkApp/>, document.getElementById('root'));

serviceWorker.unregister();
