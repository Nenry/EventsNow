import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveCurrentUser = (currentUser) =>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(res => (
    dispatch(logoutCurrentUser())
  ))
);

export const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(userRes => (
    dispatch(receiveCurrentUser(userRes))
   ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS, 
  errors
});



