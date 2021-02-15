import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Service from './components/Service';
import About from './components/About';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />


            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
