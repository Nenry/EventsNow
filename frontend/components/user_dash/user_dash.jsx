import React from 'react';
import EventIndexItem from '../events/event_index_item';


class UserDash extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarks();

  }


  render() {

    if (this.props.currentBookmarks.every(bookmark => bookmark.event !== undefined)) {

      return (
        <div className="users-dash-wrapper">


          <div className="user-events-bar">
            Saved Events
        </div>



          <div className="bookmarks">

            {this.props.currentBookmarks.map((bookmark) => (
              <div key={bookmark.id}>
                <EventIndexItem key={bookmark.event.id} event={bookmark.event} className="bookmarks" />

              </div>

            ))}

          </div>
        </div >
      );


    } else {
      return (<div>loading...</div>);
    }




  }


}


export default UserDash;