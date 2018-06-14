import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = props => {
  // const convertTime = (mt) => {
  //   let date = new Date('1970-01-01T' + mt);
  //   date.setSeconds(0, 0);

  //   return (
  //     date.toLocaleTimeString('en-us')
  //   );
  // };

  const convertDate = (date) => {
    let newDate = date.split("-");
    newDate.push(newDate.shift());
    newDate = newDate.join("/");
    return newDate;
  };

  return (
    <Link to={`/events/${props.event.id}`}>
      <div>
        <img src={props.event.img_url} />
        <div className="event-description">
          <div className="date-style">
            <div>
              {convertDate(props.event.date)}
            </div>
            <div className="event-time">

              {(props.event.time_start)}
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
};

export default EventIndexItem;