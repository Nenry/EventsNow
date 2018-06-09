import React from 'react';

const EventIndexItem = props => (
  <div>
    {props.event.title}
    <img src={props.event.img_url} />

  </div>
);

export default EventIndexItem;