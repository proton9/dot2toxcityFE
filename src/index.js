import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import D2Hp from './components/d2Hp.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(<D2Hp />, document.getElementById('root'));

function home(){
    return (
    <Router>
        <div>
        <Route path="/" component={ReactDOM.render(<D2Hp />, document.getElementById('root'))} />
        </div>
    </Router>
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
