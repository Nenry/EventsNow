import EventIndexItem from './event_index_item';
import { createEvent, updateEvent, deleteEvent, fetchEvents } from '../../actions/event_actions';
import { connect } from 'react-redux';
import EventIndex from './event_index';

const msp = state => {
  return ({
    events: Object.values(state.entities.events)

  });
};



const mdp = dispatch => {
  return ({
    fetchEvents: () => dispatch(fetchEvents())
  });
};

export default connect(msp, mdp)(EventIndex);