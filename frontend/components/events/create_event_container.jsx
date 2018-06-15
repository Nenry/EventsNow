import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return ({
    event: {
      title: '', body: '', date: '', address: '',
      city: '', state: '', category_id: 0, total_tickets: '', price: '', img_url: '',
      time_start: '', time_end: ''
    },
    formType: "Publish Event",
    errors: state.errors.events,
    session: state.session,
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = dispatch => {
  return ({
    action: (event) => dispatch(createEvent(event))
  });
};

export default connect(msp, mdp)(EventForm);
