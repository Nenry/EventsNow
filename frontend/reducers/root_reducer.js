import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entitiesReducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;