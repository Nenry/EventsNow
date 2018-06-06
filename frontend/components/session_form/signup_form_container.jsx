import signupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login">login instead</Link>
});

const mdp = dispatch => ({
  processForm: (user) => (dispatch(signup(user)))
});

export default connect(msp, mdp)(signupForm);