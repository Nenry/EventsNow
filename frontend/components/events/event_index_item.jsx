import React from 'react';

const EventIndexItem = props => (
  <div>
    <img src={props.event.img_url} />
    {props.event.date}
    {props.event.time_start}
    {props.event.title}

  </div>
);

export default EventIndexItem;