@tickets.each do |ticket|
  json.set! ticket.id do 
    json.extract! ticket, :id, :event_id, :buyer_id, :event
  end 

end 