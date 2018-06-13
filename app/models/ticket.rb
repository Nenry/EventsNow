class Ticket < ApplicationRecord
  validates :buyer_id, :event_id, presence: true
  validate :ensure_tickets_avail
  
  belongs_to :buyer,
  primary_key: :id,
  foreign_key: :buyer_id,
  class_name: :User

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

  def ensure_tickets_avail
    unless Event.find(self.event_id).remaining_tickets >= self.tickets_count
      errors[:event] << "does not have enough tickets to sell"
    end 
  end 

end
