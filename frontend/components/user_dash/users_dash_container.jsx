import { connect } from 'react-redux';
import React from 'react';
import UserDash from './user_dash';
import { deleteBookmark, fetchBookmarks } from '../../actions/bookmark_actions';
import { fetchAllTickets, deleteTicket } from '../../actions/ticket_actions';
const msp = state =>
  ({
    currentUser: state.entities.users[state.session.id],
    currentBookmarks: Object.values(state.entities.currentBookmarks),
    currentTickets: Object.values(state.entities.currentTickets)
  });


// {
//   let currentUser = state.entities.users[state.session.id];
//   let currentTickets;
//   let currentBookmarks;

//   if (currentUser) {
//     currentTickets =  state.entities.tickets[currentUser.buyer_id]
//   }

// }




const mdp = dispatch => ({
  deleteBookmark: (id) => dispatch(deleteBookmark(id)),
  fetchBookmarks: () => dispatch(fetchBookmarks()),
  fetchAllTickets: () => dispatch(fetchAllTickets()),
  deleteTicket: (ticketId) => dispatch(deleteTicket(ticketId))
});


export default connect(msp, mdp)(UserDash);


