import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Router,Route,IndexRedirect,hashHistory } from 'react-router';
import LayoutNav from './components/layout';
import Login from './views/login';

const rootRoute = (
    <Route path="/" >
        <IndexRedirect to="layout" />
        <Route path="layout" component={LayoutNav}>
            <IndexRedirect to="login" />
            <Route path="login" component={Login} />
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={hashHistory}
            routes={rootRoute}
    />,
    document.getElementById('layout-content')
);