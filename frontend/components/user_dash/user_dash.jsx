import React from 'react';
import EventIndexItem from '../events/event_index_item';
import EventIndex from '../events/event_index';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class UserDash extends React.Component {
  constructor() {
    super();
    this.state = {
      activeWindow: 1,
      clicked1: true,
      clicked2: false
    };


  }



  componentDidMount() {

    this.props.fetchBookmarks();
    this.props.fetchAllTickets();
  }


  savedEvents() {
    return (

      <div className="users-dash-wrapper">





        <div className="bookmarks">

          {this.props.currentBookmarks.map((bookmark) => (
            <div key={bookmark.id}>
              <EventIndexItem key={bookmark.event.id} event={bookmark.event} className="bookmarks" eventId={bookmark.event.id} 
              currentBookmarks={this.props.currentBookmarks} createBookmark={this.props.createBookmark} deleteBookmark={this.props.deleteBookmark}
                showIt={true} currentUser={this.props.currentUser}
              />

            </div>

          ))}

        </div>
      </div >

    );
  }

  attendEvents() {
    return (
      <div className="bookmarks">

        {this.props.currentTickets.map((ticket) => (
          <div key={ticket.id}>
            <EventIndexItem key={ticket.event.id} event={ticket.event} className="bookmarks" 
            ticketCount={ticket.tickets_count} eventId={ticket.event_id} currentBookmarks={this.props.currentBookmarks}
              createBookmark={this.props.createBookmark} deleteBookmark={this.props.deleteBookmark}  />

          </div>

        ))}

      </div>
    );

  }


  render() {

    if (this.props.currentBookmarks.every(bookmark => bookmark.event !== undefined)) {

      return (
        <div className="users-dash-wrapper">

          <div className="user-events-bar">
            <button className={this.state.clicked1 ? "saved-event-button" : ""} onClick={() => this.setState({ activeWindow: 1, clicked1: !this.state.clicked1, clicked2: !this.state.clicked2 })}>
              Saved Events
            </button>
            <button className={this.state.clicked2 ? "saved-event-button" : ""} onClick={() => this.setState({ activeWindow: 2, clicked2: !this.state.clicked2, clicked1: !this.state.clicked1 })}>
              &nbsp;Purchased Tickets
            </button>
          </div>





          {this.state.activeWindow === 1 ? this.savedEvents() : this.attendEvents()}


        </div >
      );


    } else {
      return (<div>loading...</div>);
    }




  }


}


export default UserDash;