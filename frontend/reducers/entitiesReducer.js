import {
  combineReducers
} from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import bookmarkReducer from './bookmark_reducer';
import ticketReducer from './ticket_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  currentBookmarks: bookmarkReducer,
  currentTickets: ticketReducer
});

export default entitiesReducer;