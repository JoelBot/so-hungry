import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/global.css';
// import UserForm from './components/UserForm'
// import App from './App';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path={"/"} component={App} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
