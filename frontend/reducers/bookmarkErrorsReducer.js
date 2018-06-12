import {
  RECEIVE_BOOKMARK_ERRORS,
  RECEIVE_BOOKMARK,
  RECEIVE_BOOKMARKS
} from '../actions/bookmark_actions';


const bookmarkErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKMARK:
      return [];
    case RECEIVE_BOOKMARKS:
      return [];
    case RECEIVE_BOOKMARK_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

export default bookmarkErrorsReducer;