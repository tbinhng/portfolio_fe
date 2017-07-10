import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
