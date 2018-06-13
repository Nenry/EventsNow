import React from 'react';
import EventIndexItem from '../events/event_index_item';
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
      activeWindow: 1
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
              <EventIndexItem key={bookmark.event.id} event={bookmark.event} className="bookmarks" />

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
            <EventIndexItem key={ticket.event.id} event={ticket.event} className="bookmarks" ticketCount={ticket.tickets_count} />

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
            <button onClick={() => this.setState({ activeWindow: 1 })}>
              Saved Events |
            </button>
            <button onClick={() => this.setState({ activeWindow: 2 })}>
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