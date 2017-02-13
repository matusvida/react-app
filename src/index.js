import React from 'react';
import ReactDOM from 'react-dom';
import Header1 from './header/Header1';
// import Form from './body/Form';
import Button from './body/Button';
import Home from './header/Home';
import Training from './header/Training';
import Gallery from './header/Gallery';
import Calendar from './header/Calendar';
import './css/index.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// ReactDOM.render(<Header name="Matus" items={['Home', 'Training', 'Calendar', 'Gallery']}/>, document.getElementById('header'));
// ReactDOM.render(<Header1/>, document.getElementById('header'));
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Header1}>
            <Route path="/home" component={Home} />
            <Route path="/training" component={Training} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/calendar" component={Calendar} />
        </Route>
    </Router>),
    document.getElementById('root'));
// ReactDOM.render(<Button styles="add-btn"/>, document.getElementById('root'));

// ReactDOM.render(<Form subreddit="MATUS" />, document.getElementById('root'));


