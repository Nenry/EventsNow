import sessionForm from './session_form';
import { login, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import React from 'react';

const msp = (state) => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link className='signup-message-prop' to="/signup">sign up here</Link>
});

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => (dispatch(login(user))),
  clearErrors: () => dispatch(receiveErrors([]))

});

export default connect(msp, mdp)(sessionForm);