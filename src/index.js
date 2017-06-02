import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/antdCover.css';
import { Router,Route,hashHistory,IndexRedirect } from 'react-router';
import LayoutNav from './components/layout';
import Login from './views/login';
import Users from './views/users';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route component={LayoutNav}>
            <IndexRedirect to="/user" />
            <Route path="/users" component={Users}/>
            <Route path="/produce" component={Users}/>
            <Route path="/buy" component={Users}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>
), document.getElementById('layout-content'));

