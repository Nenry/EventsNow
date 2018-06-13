import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import homeBgImg from './background/homebg_img';
import FooterBar from './footer/footer';
import CreateEventContainer from './events/create_event_container';
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import EditEventContainer from './events/edit_event_container';
import UserDashContainer from './user_dash/users_dash_container';
import CategoryIndexContainer from './categories/category_index_container';
const App = () => (
  <div className="root-div">
    <header>


      <NavBarContainer />
    </header>

    <Switch>
      <Route exact path="/categories" component={CategoryIndexContainer} />
      <Route exact path="/users/:id" component={UserDashContainer} />
      <Route exact path="/events/new" component={CreateEventContainer} />
      <Route exact path="/events/:eventId/edit" component={EditEventContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <Route exact path="/events" component={EventIndexContainer} />
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={homeBgImg} />
    </Switch>


    <div>

      <FooterBar />

    </div>



  </div>
);

export default App;


