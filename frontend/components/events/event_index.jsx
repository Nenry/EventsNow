import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

  componentDidMount() {

    this.props.fetchEvents();
    window.scrollTo(0, 0);
  }


  render() {


    return (
      <div className="events-index-wrapper">
        <div className="upcoming-header">Upcoming Events</div>
        <div className="events-index">
          {this.props.events.map((event) => {
            return (

              <EventIndexItem key={event.id} event={event} />

            );
          })}



        </div>


      </div>

    );
  }

}

export default EventIndex;