import React from 'react';

const EventIndexItem = props => (
  <div>
    <img src={props.event.img_url} />
    <div className="event-description">
      <date className="date-style">
        <div>
          {props.event.date}
        </div>
        <div className="event-time">

          {props.event.time_start}
        </div>

      </date>
      <div className="hp-event-title">
        {props.event.title}


      </div>

    </div>


  </div>
);

export default EventIndexItem;