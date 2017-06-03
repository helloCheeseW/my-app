import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/antdCover.css';
import { Router,Route,hashHistory,IndexRedirect } from 'react-router';
import LayoutNav from './components/layout';
import Login from './views/login';
import Users from './views/users';
import Produce from './views/produce';
import Buy from './views/buy';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={LayoutNav}>
            <IndexRedirect to="login" />
            <Route path="/users" component={Users}/>
            <Route path="/produce" component={Produce}/>
            <Route path="/buy" component={Buy}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>
), document.getElementById('layout-content'));

