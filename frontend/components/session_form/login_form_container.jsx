import sessionForm from './session_form';
import {login} from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({errors}) => ({
  errors: errors.session,
  formType: 'login',
  navLink: <Link className='signup-message-prop' to="/signup">sign up here</Link>
});

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => (dispatch(login(user)))
});

export default connect(msp, mdp)(sessionForm);