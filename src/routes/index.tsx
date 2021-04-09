import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Acompanhamento from '../pages/Acompanhamento';
import Usuarios from '../pages/Usuarios';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Dashboard" exact component={Dashboard} isPrivate/>
        <Route path="/Acompanhamento" exact component={Acompanhamento} isPrivate/>
        <Route path="/Usuarios" exact component={Usuarios} isPrivate/>
    </Switch>
);

export default Routes;
