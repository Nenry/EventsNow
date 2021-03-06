import signupForm from './signup_form';
import { signup, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => ({
  errors: state.errors.session,
  session: state.session,
  formType: 'signup',
  navLink: <Link className='signup-message-prop' to="/signin">login here</Link>,
  currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
  processForm: (user) => (dispatch(signup(user))),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(msp, mdp)(signupForm);