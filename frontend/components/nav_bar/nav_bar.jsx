import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  
  const logged = () => {
    return (
      <div>
        <div className="nav-bar-main-div">
          <Link className="nav-bar-home" to='/'>EventsNow</Link>
          <section className="nav-bar-right-side">
          <Link className="nav-bar-link" to='/events'>Browse Events</Link>
            
          
          <Link className="nav-bar-link"to={`/users/${props.currentUser.id}`}>
            {props.currentUser.first_name}
          </Link>
          <button className="nav-bar-link" onClick={() => props.logout()}>Logout</button>
            <Link className="nav-bar-link" to='/events/new'>Create Event</Link>
          </section>
        </div>

      </div>
    );
  };



  const newUser = () => {
    return (
      <div>
        <div className="nav-bar-main-div">
          <Link className="nav-bar-home" to='/'>EventsNow</Link>
          <section className="nav-bar-right-side">
          <Link className="nav-bar-link" to='/events'>Browse Events</Link>
            <Link className="nav-bar-link" to='/signin'>Sign In</Link>
            <Link className="nav-bar-link" to='/events/new'>Create Event</Link>
          </section>
        </div>
        
      </div>
    );
  };


  return props.currentUser ? logged() : newUser();

};
// const NavBar = ({ currentUser, logout }) => {

//   const logged = () => {
//     return (
//       <button onClick={() => logout()}>Logout</button>
//     )
//   }

//   const newUser = () => {
//     return (
//       <Link to='Sign Up'>Sign Up</Link>
//     )
//   }

//   return (
//     <div>
//       <Link to='/'>EventsNow</Link>
//       <Link to='/events'>Browse Events</Link>
//       <Link to='/events/new'>Create Event</Link>

//       {currentUser ? logged() :  newUser()}


//       <Link to='/signin'></Link>



//     </div>




//   );
// };
export default NavBar;