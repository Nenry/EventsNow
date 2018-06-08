import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  
  const logged = () => {
    return (
      <div>
        <div className="nav-bar-main-div">
          <Link className="nav-bar-home" to='/'>EventsNow</Link>
          <section className="nav-bar-right-side">
          <Link className="nav-bar-link" to='/events'>BROWSE EVENTS</Link>
            
          <div className="user-name">
              <img className="user-avatar" src={props.currentUser.img_url} alt=""/>
              {/* credit:http://www.myrunningcostumes.com/costumes/russell */}
            <Link className=""to={`/users/${props.currentUser.id}`}>
              {props.currentUser.first_name}
            </Link>
          </div>
          <button className="nav-bar-link" onClick={() => props.logout()}>LOGOUT</button>
            <Link className="nav-bar-link-create" to='/events/new'>CREATE EVENT</Link>
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
          <Link className="nav-bar-link" to='/events'>BROWSE EVENTS</Link>
            <Link className="nav-bar-link" to='/signin'>SIGN IN</Link>
            <Link className="nav-bar-link-create" to='/events/new'>CREATE EVENT</Link>
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