import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) =>{

  const newSessionGreeting = () => {
    return(
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  };

  const personalGreeting = () => {
    return(
      <div>
      <h3>Hello {(currentUser.first_name)}</h3>
      <button onClick={()=>logout()}>Logout</button>
      </div>
    );
  };

  return currentUser ? personalGreeting() : newSessionGreeting();

};

export default Greeting;