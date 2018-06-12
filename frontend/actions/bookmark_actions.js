import * as BookMarkApiUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';


export const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const removeBookmark = (bookmarkId) => ({
  type: REMOVE_BOOKMARK,
  bookmarkId
});

export const receiveBookmarks = (bookmarks) => ({
  type: RECEIVE_BOOKMARKS,
  bookmarks
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BOOKMARK_ERRORS,
  errors
});

export const createBookmark = (eventId) => dispatch => (
  BookMarkApiUtil.createBookmark(eventId).then(bookmarkRes => (
    dispatch(receiveBookmark(bookmarkRes))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBookmark = (id) => dispatch => (
  BookMarkApiUtil.deleteBookmark(id).then(bookmarkRes => (
    dispatch(removeBookmark(bookmarkRes.id))
  ))
);

export const fetchBookmarks = () => dispatch => (
  BookMarkApiUtil.fetchAllBookmarks().then(bookmarksRes => (
    dispatch(receiveBookmarks(bookmarksRes))
  ))
);