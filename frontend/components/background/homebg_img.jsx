import React from 'react';
import EventIndexContainer from '../events/event_index_container';

const homeBgImg = () => (
  <div className="home-bg-img">
    <img className="background-banner" src="https://farm2.staticflickr.com/1759/28789455328_ed8f3a14bd_h.jpg" />
    {/* img credit: https://500px.com/krunja */}
    <div className="home-flex">
      <div className="home-message">
        Find your next experience
      </div>

    </div>

    <div className="temp-events">
      <EventIndexContainer />
    </div>


  </div>


);

export default homeBgImg;


