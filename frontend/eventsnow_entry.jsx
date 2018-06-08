import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { fetchEvents, fetchEvent, createEvent,  editEvent, deleteEvent} from './util/event_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.store = store;
  // window.fetchEvents = fetchEvents;
  // window.fetchEvent = fetchEvent;
  // window.createEvent = createEvent;
  // window.editEvent = editEvent;
  // window.deleteEvent = deleteEvent;
  ReactDOM.render(<Root store={store}/>, root);
});