import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    window.scrollTo(0, 0);
  }

  handleDelete(e) {
    this.props.deleteEvent(this.props.event.id).then(() => this.props.history.push('/events'));
  }

  render() {
    if (this.props.event) {
      return (
        <div className='event-show'>

          <div className="event-show-wrapper">
            <div className="event-show-banner-detail">
              <img className="event-show-banner" src={this.props.event.img_url} alt="" />

              <div className="event-side-banner">
                {this.props.event.title}
                <div>
                  Price: {this.props.event.price}$

                </div>
                <button className="tickets-button">Tickets</button>
              </div>

            </div>
            <div className="show-container">
              <div className='show-bar'>
                {this.props.session.id === this.props.event.host_id ? <Link to={`/events/${this.props.event.id}/edit`} className="show-bar-button">Edit</Link> : <div></div>}
                {this.props.session.id === this.props.event.host_id ? <button onClick={(e) => this.handleDelete(e)} className="show-bar-button">Delete</button> : <div></div>}
                <button onClick={() => this.props.createBookmark({ event_id: this.props.event.id })} className="show-bar-button">Bookmark</button>
              </div>
              <div className="event-show-main-detail">
                <div className="grid-desc">
                  <div className="show-desc-header">
                    Description

                  </div>
                  <div className="show-body">
                    {this.props.event.body}

                  </div>
                </div>

                <div className="details-loc">

                  <div>
                    <div className="sidebar-detail-header">

                      Date and Time
                    </div>
                    {this.props.event.time_start}-{this.props.event.time_end}
                  </div>


                  <div>
                    <div className="sidebar-detail-header">
                      Location


                    </div>
                    <div>
                      {this.props.event.address}
                    </div>
                    {this.props.event.city},
                    {this.props.event.state}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      );
    }

    return (<div>Loading...</div>);

  }
}

export default withRouter(EventShow);