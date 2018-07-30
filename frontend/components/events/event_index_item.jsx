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
    let bookmark = props.currentBookmarks;
    console.log(bookmark);
    for (let i = 0; i < bookmark.length; i++ ) {
      if (bookmark[i].user_id === props.currentUser.id) {
        return <i className="fas fa-bookmark"></i>;
      }
    }
    return <i className="far fa-bookmark bookmark-color"></i>;
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

        {props.bookmarked ? <i className="far fa-bookmark bookmark-color"></i> : <i className="fas fa-bookmark"></i> }
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