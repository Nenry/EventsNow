import merge from 'lodash/merge';

import {
  RECEIVE_BOOKMARK,
  RECEIVE_BOOKMARKS,
  REMOVE_BOOKMARK
} from '../actions/bookmark_actions';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';


const bookmarkReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BOOKMARKS:
      return merge({}, state, action.bookmarks);
    case RECEIVE_BOOKMARK:
      return merge({}, state, {
        [action.bookmark.id]: action.bookmark
      });
    case REMOVE_BOOKMARK:
      let newState = merge({}, state);
      delete newState[action.bookmarkId];
      return newState;
    default:
      return state;
  }
};

export default bookmarkReducer;