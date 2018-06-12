import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import eventErrorsReducer from './eventErrorsReducer';
import bookmarkErrorsReudcer from './bookmarkErrorsReducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  events: eventErrorsReducer,
  bookmarks: bookmarkErrorsReudcer
});

export default errorsReducer;