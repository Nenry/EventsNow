@bookmarks.each do |bookmark|
  json.set! bookmark.id do 
    json.extract! bookmark, :id, :event_id, :user_id, :event
  end 

end 