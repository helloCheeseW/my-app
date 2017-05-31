import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, IndexRedirect,hashHistory } from 'react-router'
import App from './views/App';
import './styles/index.css';


const rootRoute = (
    <Route path="/" >
        <IndexRedirect to="app" />
        <Route path="app" component={App}/>
    </Route>
);

ReactDOM.render(
    <Router history={hashHistory}
            routes={rootRoute}
    />,
    document.getElementById('layout-content')
);