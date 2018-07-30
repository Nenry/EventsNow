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
            <Link className="nav-bar-link1" to='/categories'>BROWSE CATEGORIES</Link>

            <div className="user-name">
              <img className="user-avatar" src={props.currentUser.img_url} alt="" />
              {/* credit:http://www.myrunningcostumes.com/costumes/russell */}
              <Link className="" to={`/users/${props.currentUser.id}`}>
                {props.currentUser.first_name}
              </Link>
            </div>
            <button className="nav-bar-link-logout" onClick={() => props.logout().then(() => props.clearEvent())}>LOGOUT</button>
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
            <Link className="nav-bar-link1" to='/categories'>BROWSE CATEGORIES</Link>
            <Link className="nav-bar-link-logout" to='/signin'>SIGN IN</Link>
            <Link className="nav-bar-link-create" to='/signin'>CREATE EVENT</Link>
          </section>
        </div>

      </div>
    );
  };


  return props.currentUser ? logged() : newUser();

};

export default NavBar;