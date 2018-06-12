export const createBookmark = (bookmark) => (
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: {
      bookmark
    }
  })
);

export const deleteBookmark = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${id}`
  })
);

export const fetchAllBookmarks = () => (
  $.ajax({
    method: 'GET',
    url: `/api/bookmarks`
  })
);