import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/index.css';
import API from './components/API'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path={"/"} component={API} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
