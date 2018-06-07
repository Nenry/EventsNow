import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  
  const logged = () => {
    return (
      <div>
        <Link to='/'>EventsNow</Link>
        <Link to='/events'>Browse Events</Link>
      <button onClick={() => logout()}>Logout</button>
        <Link to='/events/new'>Create Event</Link>
      </div>
    );
  };

  const newUser = () => {
    return (
      <div>
        <Link to='/'>EventsNow</Link>
        <Link to='/events'>Browse Events</Link>
        <Link to='/login'>Sign In</Link>
        <Link to='/events/new'>Create Event</Link>
      </div>
    );
  };


  return currentUser ? logged() : newUser();

};
export default NavBar;