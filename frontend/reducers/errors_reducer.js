import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import eventErrorsReducer from './eventErrorsReducer';
import bookmarkErrorsReudcer from './bookmarkErrorsReducer';
import ticketErrorsReducer from './ticket_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  events: eventErrorsReducer,
  bookmarks: bookmarkErrorsReudcer,
  tickets: ticketErrorsReducer
});

export default errorsReducer;