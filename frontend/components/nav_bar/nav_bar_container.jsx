import  NavBar  from './nav_bar';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);