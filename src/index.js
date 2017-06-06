import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/antdCover.css';
import { Router,Route,hashHistory,IndexRedirect } from 'react-router';
import LayoutNav from './components/layout';
import Login from './views/login';
import Users from './views/users';
import EditUser from './views/editUser';
import Produce from './views/produce';
import Buy from './views/buy';
import Order from './views/order';
import Monitor from './views/monitor';


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index';
import ajaxMiddleware from './common/ajaxMiddleware'

const middleware = [ thunk, ajaxMiddleware];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={LayoutNav}>
                <IndexRedirect to="login" />
                <Route path="/users" component={Users}/>
                <Route path="users/edit" component={EditUser}/>
                <Route path="/produce" component={Produce}/>
                <Route path="/order" component={Order}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/monitor" component={Monitor}/>
            </Route>
            <Route path="/login" component={Login}/>
        </Router>
    </Provider>
), document.getElementById('layout-content'));

