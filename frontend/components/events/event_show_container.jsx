import React from 'react';
import { connect } from 'react-redux';
import { updateEvent, deleteEvent, fetchEvent } from '../../actions/event_actions';
import EventShow from './event_show';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import { createTicket } from '../../actions/ticket_actions';
const msp = (state, ownProps) => {
  return ({
    event: state.entities.events[ownProps.match.params.eventId],
    session: state.session,
    currentBookmarks: state.currentBookmarks,
    errors: state.errors.tickets,
    currentUser: state.entities.users[state.session.id]

  });
};

const mdp = dispatch => {
  return ({
    action: (event) => (dispatch(updateEvent(event))),
    deleteEvent: (id) => (dispatch(deleteEvent(id))),
    fetchEvent: (id) => (dispatch(fetchEvent(id))),
    createBookmark: (eventId) => (dispatch(createBookmark(eventId))),
    deleteBookmark: (id) => (dispatch(deleteBookmark(id))),
    createTicket: (eventId) => (dispatch(createTicket(eventId)))
  });
};

export default connect(msp, mdp)(EventShow);