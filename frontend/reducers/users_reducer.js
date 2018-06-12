import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.payload.user.id]: action.payload.user
      });

    default:
      return state;
  }
};

export default usersReducer;