import  NavBar  from './nav_bar';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import {deleteClear} from '../../actions/bookmark_actions';
const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  clearEvent: () => (dispatch(deleteClear()))
});

export default connect(msp, mdp)(NavBar);