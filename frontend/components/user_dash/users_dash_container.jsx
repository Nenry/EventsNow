import { connect } from 'react-redux';
import React from 'react';
import UserDash from './user_dash';
import { deleteBookmark, fetchBookmarks } from '../../actions/bookmark_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  currentBookmarks: Object.values(state.entities.currentBookmarks)
});


const mdp = dispatch => ({
  deleteBookmark: (id) => dispatch(deleteBookmark(id)),
  fetchBookmarks: () => dispatch(fetchBookmarks())
});


export default connect(msp, mdp)(UserDash);

