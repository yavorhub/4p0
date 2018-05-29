import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router } from 'react-router-dom'
import {Routes} from "./Routes";

ReactDOM.render(
<Router>
    <Routes />
</Router>, document.getElementById('root'));
registerServiceWorker();
