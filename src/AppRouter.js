import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import ShortLinkRedirect from './components/ShortLinkRedirect';
import Login from './components/Login';
import Signup from './components/Signup';

const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          path="/:hash"
          render={props => (
            <ShortLinkRedirect hash={props.match.params.hash} />
          )}
        />
      </Switch>
    </BrowserRouter>
);

export default AppRouter;
