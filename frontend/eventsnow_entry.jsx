import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { fetchEvents, fetchEvent, createEvent, editEvent, deleteEvent, updateEvent } from './actions/event_actions';
import { createBookmark, deleteBookmark, fetchBookmarks } from './actions/bookmark_actions';
import { createTicket, deleteTicket, fetchAllTickets } from './actions/ticket_actions';
import { fetchAllCategories, fetchCategory } from './actions/category_actions';
document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
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
  window.store = store;
  // window.fetchEvents = fetchEvents;
  // window.fetchEvent = fetchEvent;
  // window.createEvent = createEvent;
  // window.editEvent = editEvent;
  // window.deleteEvent = deleteEvent;
  // window.updateEvent = updateEvent;
  window.createBookmark = createBookmark;
  window.deleteBookmark = deleteBookmark;
  window.fetchBookmarks = fetchBookmarks;
  window.createTicket = createTicket;
  window.deleteTicket = deleteTicket;
  window.fetchAllTickets = fetchAllTickets;
  window.fetchAllCategories = fetchAllCategories;
  window.fetchCategory = fetchCategory;

  ReactDOM.render(<Root store={store} />, root);
});