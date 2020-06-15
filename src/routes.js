import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import UserForm from './component/UserForm';

const getRoutes = () => (
    <Switch>
    <Route exact path="/" key="landing" component={App} />
    <Route exact path="/userform" key="userform" component={UserForm} />
    </Switch>
);
module.getRoutes = getRoutes;

