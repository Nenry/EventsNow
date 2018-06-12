import {
  RECEIVE_TICKET,
  RECEIVE_TICKETS,
  RECEIVE_TICKET_ERRORS
} from '../actions/ticket_actions';

const ticketErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKET:
      return [];
    case RECEIVE_TICKETS:
      return [];
    case RECEIVE_TICKET_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ticketErrorsReducer;