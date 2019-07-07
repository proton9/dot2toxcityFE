import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import {HashRouter as Router, Route, Link} from "react-router-dom";

import D2Hp from './d2Hp.jsx';
import AboutP from './about.jsx';
import author from './author.jsx';
import Home from './home.jsx';

class Main extends React.Component{
    render(){
        return(
            <div className="MainPage">
                <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark shadow-sm p-1 bg-dark ">
                    <a className="navbar-brand" href="#">PatternFinder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/about">About Project<span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/author">About Author<span className="sr-only"></span></Link>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline pull-right">
                        <label className="text-white">Top Pros</label>
                    </form>
                </nav>
                <div id="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={AboutP} />
                    <Route path="/author" component={author} />
                </div>
            </div>
            );

    }

}

export default Main;
