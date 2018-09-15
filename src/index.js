import React from 'react';
import ReactDOM from 'react-dom'; //virtual dom created by react
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
