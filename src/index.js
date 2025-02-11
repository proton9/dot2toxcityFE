import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Main from "./components/main"

import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router><Main/></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
