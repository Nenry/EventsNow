@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :body, :date, :time_start, :time_end, :address, :city, :state, 
    :category_id, :tickets_left, :price, :img_url
  end 
end 