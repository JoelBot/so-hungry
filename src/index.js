import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/global.css';
import API from './components/API'
<<<<<<< HEAD
// import UserForm from './components/UserForm'
// import App from './App';
=======
>>>>>>> d458647fe286d440c4fb1a2793ef3d601e2f6ba9
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path={"/"} component={API} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
