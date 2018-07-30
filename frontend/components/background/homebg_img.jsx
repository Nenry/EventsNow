import React from 'react';
import EventIndexContainer from '../events/event_index_container';
import CategoryIndexContainer from '../categories/category_index_container';
const homeBgImg = () => (
  <div className="home-bg-img">
    <img className="background-banner" src="https://c1.staticflickr.com/2/1751/40976644480_10d3ca9cce_b.jpg" />
    {/* img credit: https://500px.com/krunja */}
    <div className="home-flex">
      <div className="home-message">
        Find your next experience
      </div>

    </div>

    <div className="temp-events">
      <EventIndexContainer />
    </div>


      <CategoryIndexContainer />
   



  </div>


);

export default homeBgImg;


