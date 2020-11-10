import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="" component={Home}/>
    </Switch>
);

export default Routes;
