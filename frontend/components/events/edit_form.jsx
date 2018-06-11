import React from 'react';
import EventForm from './event_form';

class EditEventForm extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);

  }

  render() {

    const { action, event } = this.props;

    if (this.props.event) {
      return (
        <EventForm action={action} event={event} />
      );
    } else {
      return (<div>Loading...</div>);
    }

  }

}

export default EditEventForm;