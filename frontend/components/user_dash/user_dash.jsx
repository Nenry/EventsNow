import React from 'react';
import EventIndexItem from '../events/event_index_item';


class UserDash extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarks();

  }


  render() {

    if (Object.keys(this.props.currentBookmarks).length > 0) {

      return (
        <div className="bookmarks">

          {this.props.currentBookmarks.map((bookmark) => (
            <EventIndexItem key={bookmark.event.id} event={bookmark.event} />

          ))}

        </div>
      );


    } else {
      return (<div>loading...</div>);
    }




  }


}


export default UserDash;