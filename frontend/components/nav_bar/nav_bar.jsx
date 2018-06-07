import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  
  const logged = () => {
    return (
      <div>
        <div className="nav-bar-main-div">
          <Link className="nav-bar-home" to='/'>EventsNow</Link>
          <section className="nav-bar-right-side">
          <Link className="nav-bar-link" to='/events'>Browse Events</Link>
            
            <img className="user-avatar" src="https://cdn1.iconfinder.com/data/icons/circle-outlines/512/User_Account_Avatar_Person_Profile_Login_Human-512.png" />
            {/* credit:https://www.iconfinder.com/icons/640974/account_avatar_human_login_person_profile_user_icon */}
          <Link className="nav-bar-link"to={`/users/${currentUser.id}`}>
            {currentUser.first_name}
          </Link>
          <button className="nav-bar-link" onClick={() => logout()}>Logout</button>
            <Link className="nav-bar-link" to='/events/new'>Create Event</Link>
          </section>
        </div>
          <img className="background-banner" src="http://staybarcelonaapartments.com/blog/wp-content/uploads/2017/11/the-color-run.jpg"/>
          {/* credit:http://staybarcelonaapartments.com/blog/whats-hot-in-barcelona/color-run-skittles-barcelona/ */}
      </div>
    );
  };

  const newUser = () => {
    return (
      <div>
        <Link to='/'>EventsNow</Link>
        <section>
        <Link to='/events'>Browse Events</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/events/new'>Create Event</Link>
        </section>
      </div>
    );
  };


  return currentUser ? logged() : newUser();

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