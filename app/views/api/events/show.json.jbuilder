json.extract! @event, :id, :title, :body, :date, :address, :city, :state, 
:category_id, :tickets_left, :price, :img_url, :time_start, :time_end, :host_id
json.current_user_bookmarks !!@event.bookmarks.find_by(user_id: current_user.id)