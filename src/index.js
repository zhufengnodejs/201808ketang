import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './common/reset.less';
import {Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Mime from './containers/Mime';
import Profile from './containers/Profile';
import Detail from './containers/Detail';
import Login from './containers/Login';
import Reg from './containers/Reg';
import Layout from './containers/Layout';
import {Provider} from 'react-redux';
import store from './store';
import {ConnectedRouter} from 'react-router-redux';
import history from './store/history';
ReactDOM.render(<Provider store={store}>
<ConnectedRouter history={history}>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mime" component={Mime} />
            <Route path="/profile" component={Profile} />
            <Route path="/detail" component={Detail} />
            <Route path="/login" component={Login} />
            <Route path="/reg" component={Reg} />
        </Switch>
    </Layout>
</ConnectedRouter>
</Provider>,
    document.querySelector('#root'));