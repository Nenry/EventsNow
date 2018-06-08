# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  body         :text             not null
#  date         :date             not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  host_id      :integer          not null
#  category_id  :integer          not null
#  tickets_left :integer          not null
#  img_url      :string           not null
#  price        :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  time_start   :string           not null
#  time_end     :string           not null
#

class Event < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :body, :date, :time_start, :time_end, :address, :city, :state, :host_id, :category_id,
  :tickets_left, :img_url, :price, presence: true

  before_validation :ensure_img_url

  def ensure_img_url
    self.img_url ||= "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7988cfd6c74ccf6e16094939d87dc274&auto=format&fit=crop&w=2706&q=80"
    # Photo by Redd Angelo on Unsplash
  end 

  belongs_to :user,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  # belongs_to :category,
  # primary_key: :id,
  # foreign_key: :category_id,
  # class_name: :Category
  


end 