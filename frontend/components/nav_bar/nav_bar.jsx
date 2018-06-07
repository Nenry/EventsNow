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
            
          <div className="user-name">
              <img className="user-avatar" src="https://static1.squarespace.com/static/53102a86e4b0aa956286c5d3/t/53168557e4b0cc8a5400f982/1393984862856/art_russell.png" alt=""/>
              {/* credit:http://www.myrunningcostumes.com/costumes/russell */}
            <Link className=""to={`/users/${props.currentUser.id}`}>
              {props.currentUser.first_name}
            </Link>
          </div>
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