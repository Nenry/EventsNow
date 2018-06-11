export const createBookmark = (bookmark) => (
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks'
  })
);

export const deleteBookmark = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`
  })
);