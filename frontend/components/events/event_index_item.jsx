import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = props => {


  const convertDate = (date) => {
    let newDate = date.split("-");
    newDate.push(newDate.shift());
    newDate = newDate.join("/");
    return newDate;
  };

  const bookmarked = () => {
    let bookmarks = props.currentBookmarks;
    console.log(props.eventId);
    for (let i = 0; i < bookmarks.length; i++ ) {
      if (bookmarks[i].event_id === props.eventId) {
        return true;
      }
    }
    return false;
  };

  return (
    <Link to={`/events/${props.event.id}`}>
      <div className="event-index-container">
        <img className="event-index-img" src={props.event.img_url} />
        <div className="event-description">
          <div className="date-style">
            <div>
              {convertDate(props.event.date)}
            </div>
            <div className="event-time">

              {(props.event.time_start)}&nbsp;
            </div>

            <div>

              {props.ticketCount ? `Tickets: ${props.ticketCount}` : <div></div>}
            </div>

          </div>
          <div className="hp-event-title">
            {props.event.title}


          </div>

        </div>
        {bookmarked() ? <i className="fas fa-bookmark"></i> : <i className="far fa-bookmark bookmark-color"></i>  }

          {/* {console.log(props.bookmarked)} */}
        {/* {bookmarked()} */}
        {/* {if (this.props.currentBookmarks.forEach(bookmark) )}
        <i className="far fa-bookmark bookmark-color"></i>
        <i className="fas fa-bookmark"></i> */}




      </div>
    </Link>
  );
};

export default EventIndexItem;