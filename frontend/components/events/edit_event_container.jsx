import React from 'react';
import { connect } from 'react-redux';
import { updateEvent, fetchEvent } from '../../actions/event_actions';
// import { EditEventForm } from './edit_form';
import EventForm from './event_form';

const msp = (state, ownProps) => {
  return ({
    event: state.entities.events[ownProps.match.params.eventId],
    formType: "Update Event",
    errors: state.errors.events
  });
};

const mdp = dispatch => {
  return ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    action: (event) => dispatch(updateEvent(event))
  });
};

class EditEventForm extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);

  }

  render() {

    const { action, event, formType, errors } = this.props;

    if (this.props.event) {
      return (
        <EventForm action={action} event={event} formType={formType} errors={errors} />
      );
    } else {
      return (<div>Loading...</div>);
    }

  }

}




export default connect(msp, mdp)(EditEventForm);




