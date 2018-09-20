import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './common/reset.less';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Mime from './containers/Mime';
import Profile from './containers/Profile';
import Layout from './containers/Layout';
ReactDOM.render(<Router>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mime" component={Mime} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </Layout>
</Router>,
    document.querySelector('#root'));