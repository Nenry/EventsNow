import React from 'react';
import { connect } from 'react-redux';
import { updateEvent, deleteEvent, fetchEvent } from '../../actions/event_actions';
import ShowEvent from './event_show';

const msp = (state, ownProps) => {
  return ({
    event: state.entities.events[ownProps.match.params.eventId],
    session: state.session
  });
};

const mdp = dispatch => {
  return ({
    action: (event) => (dispatch(updateEvent(event))),
    deleteEvent: (id) => (dispatch(deleteEvent(id))),
    fetchEvent: (id) => (dispatch(fetchEvent(id)))
  });
};

export default connect(msp, mdp)(ShowEvent);