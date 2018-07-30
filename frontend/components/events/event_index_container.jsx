import EventIndexItem from './event_index_item';
import { createEvent, updateEvent, deleteEvent, fetchEvents } from '../../actions/event_actions';
import { deleteBookmark, fetchBookmarks, deleteClear, createBookmark } from '../../actions/bookmark_actions';
import { connect } from 'react-redux';
import EventIndex from './event_index';

const msp = state => {
  return ({
    events: Object.values(state.entities.events), 
    currentBookmarks: Object.values(state.entities.currentBookmarks),
    currentUser: state.entities.users[state.session.id]

  });
};



const mdp = dispatch => {
  return ({
    fetchEvents: () => dispatch(fetchEvents()),
    deleteBookmark: (id) => dispatch(deleteBookmark(id)),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    createBookmark: (eventId) => (dispatch(createBookmark(eventId)))
  });
};

export default connect(msp, mdp)(EventIndex);