import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    if (this.props.event) {
      return (
        <div className='event-show'>
          <div className="event-show-wrapper">
            <div className="event-show-banner-detail">
              <img src={this.props.event.img_url} alt="" />

              <div>
                {this.props.event.title}
                <div>
                  Price: {this.props.event.price}$
  
                </div>
              </div>

            </div>
            <div className="event-show-main-detail">
              <div className="event-show-main-detail">
                <div>
                Description
                  
                </div>
                {this.props.event.body}
              </div>
            </div>
          </div>


        </div>

      );
    }

    return (<div>Loading...</div>);

  }
}

export default EventShow;