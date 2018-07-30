import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {

  componentDidMount() {

    this.props.fetchEvents();
    if (this.props.currentUser) {
      this.props.fetchBookmarks();
    }
    window.scrollTo(0, 0);
  }


  bookmarked () {
    let bookmark = this.props.currentBookmarks;
    for (let i = 0; i < bookmark.length; i++) {
      if (bookmark[i].user_id === this.props.currentUser.id) {
        return true;
      }
    }
    return false;
  }


  render() {


    return (
      <div className="events-index-wrapper">
        <div className="upcoming-header">Upcoming Events</div>
        <div className="events-index">
          {this.props.events.map((event) => {
            return (

              <EventIndexItem key={event.id} event={event} eventId={event.id} showIt={true} currentUser ={this.props.currentUser}
              currentBookmarks={this.props.currentBookmarks} deleteBookmark={this.props.deleteBookmark} createBookmark={this.props.createBookmark}/>

            );
          })}



        </div>


      </div>

    );
  }

}

export default EventIndex;