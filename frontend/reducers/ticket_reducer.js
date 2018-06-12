import merge from 'lodash/merge';

import {
  RECEIVE_TICKETS,
  RECEIVE_TICKET,
  REMOVE_TICKET
} from '../actions/ticket_actions';
import {
  RECEIVE_BOOKMARK
} from '../actions/bookmark_actions';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const ticketReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKETS:
      return merge({}, state, action.tickets);
    case RECEIVE_TICKET:
      return merge({}, state, {
        [action.ticket.id]: action.ticket
      });
    case REMOVE_TICKET:
      let newState = merge({}, state);
      delete newState[action.ticketId];
      return new newState;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.tickets);
    default:
      return state;
  }
};

export default ticketReducer;