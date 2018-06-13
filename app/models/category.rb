class Category < ApplicationRecord

  has_many :events,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :Event

end 