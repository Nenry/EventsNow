class Ticket < ApplicationRecord
  validates :buyer_id, :event_id, presence: true

  belongs_to :buyer,
  primary_key: :id,
  foreign_key: :buyer_id,
  class_name: :User

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

end
