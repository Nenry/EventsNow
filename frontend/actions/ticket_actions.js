import * as TicketApiUtil from '../util/ticket_api_util';


export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';

export const receiveTickets = (tickets) => ({
  type: RECEIVE_TICKETS,
  tickets
});

export const receiveTicket = (ticket) => ({
  type: RECEIVE_TICKET,
  ticket
});


export const removeTicket = (ticketId) => ({
  type: REMOVE_TICKET,
  ticketId

});

export const receiveErrors = (errors) => ({
  type: RECEIVE_TICKET_ERRORS,
  errors
});


export const createTicket = (eventId) => dispatch => (
  TicketApiUtil.createTicket(eventId).then(ticketRes => (
    dispatch(receiveTicket(ticketRes))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteTicket = (ticketId) => dispatch => (
  TicketApiUtil.deleteTicket(ticketId).then(ticketRes => (
    dispatch(removeTicket(ticketRes.id))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllTickets = () => dispatch => (
  TicketApiUtil.fetchAllTickets().then(tickets => (
    dispatch(receiveTickets(tickets))
  ))
);