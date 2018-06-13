import React from 'react';
import { Link } from 'react-router-dom';
const EventIndexItem = props => (
  <Link to={`/events/${props.event.id}`}>
    <div>
      <img src={props.event.img_url} />
      <div className="event-description">
        <div className="date-style">
          <div>
            {props.event.date}
          </div>
          <div className="event-time">

            {props.event.time_start}
          </div>

          <div>

            {props.ticketCount ? `Tickets: ${props.ticketCount}` : <div></div>}
          </div>

        </div>
        <div className="hp-event-title">
          {props.event.title}


        </div>

      </div>


    </div>
  </Link>
);

export default EventIndexItem;