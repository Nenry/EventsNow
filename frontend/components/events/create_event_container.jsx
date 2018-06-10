import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return ({
    event: {
      title: '', body: '', date: '', address: '',
      city: '', state: '', category_id: '', tickets_left: '', price: '', img_url: '',
      time_start: '', time_end: ''
    }
  });
};

const mdp = dispatch => {
  return ({
    action: (event) => dispatch(createEvent(event))
  });
};

export default connect(msp, mdp)(EventForm);
