import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import eventErrorsReducer from './eventErrorsReducer';
import bookmarkErrorsReducer from './bookmarkErrorsReducer';
import ticketErrorsReducer from './ticket_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  events: eventErrorsReducer,
  bookmarks: bookmarkErrorsReducer,
  tickets: ticketErrorsReducer
});

export default errorsReducer;