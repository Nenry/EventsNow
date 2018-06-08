import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import eventErrorsReducer from './eventErrorsReducer';
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  events: eventErrorsReducer
});

export default errorsReducer;