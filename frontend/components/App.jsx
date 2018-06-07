import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      
    <h1>Hello from app.jsx </h1>
    <GreetingContainer />
    </header>
    <Switch>
    <Route exact path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignUpFormContainer}/>
    </Switch>
  </div>
);

export default App;


