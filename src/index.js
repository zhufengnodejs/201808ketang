import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './common/reset.less';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Mime from './containers/Mime';
import Profile from './containers/Profile';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mime" component={Mime} />
        <Route path="/profile" component={Profile} />
    </Switch>
</Router>,
    document.querySelector('#root'));