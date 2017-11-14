import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/global.css';
import API from './components/API'
// import UserForm from './components/UserForm'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path={"/"} component={API} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
