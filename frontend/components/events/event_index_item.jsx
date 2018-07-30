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
    
    for (let i = 0; i < bookmarks.length; i++ ) {
      if (bookmarks[i].event_id === props.eventId) {
        return bookmarks[i].id;
      }
    }
    return false;
  };

  return (
    <div>
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

          {/* {console.log(props.bookmarked)} */}
        {/* {bookmarked()} */}
        {/* {if (this.props.currentBookmarks.forEach(bookmark) )}
        <i className="far fa-bookmark bookmark-color"></i>
      <i className="fas fa-bookmark"></i> */}




      </div>
    </Link>


    <div className='bookmark-icon'>
    {props.showIt ?
      (bookmarked() ? 

        (<div className='tooltip'>
          <i className="fas fa-bookmark bookmark-size" onClick={() => props.deleteBookmark(bookmarked())} ></i> 
          <div className='tooltip-message'>Unsave Event</div>
          </div>
          
        )
      : 
        (<div className='tooltip'>
          <i className="far fa-bookmark bookmark-size bookmark-color" onClick={() => props.createBookmark({event_id: props.eventId})}></i>  
              <div className='tooltip-message'>Save Event</div>
        </div>
        )
      
    
      )
    : <div></div>
    
    }


    </div>

    </div>
  );
};

export default EventIndexItem;