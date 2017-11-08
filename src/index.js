import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/index.css';
import Home from './components/Home'
import IDK from './components/IDK'
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path={"/"} component={IDK} />
            <Route path={"/idk"} component={IDK} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
