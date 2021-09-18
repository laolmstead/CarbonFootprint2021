import React, {Component} from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from './App'
import Profile from './Profile/Profile'
import history from './history'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/Profile" component={Profile}/>
                </Switch>
            </Router>
        )
    }
}