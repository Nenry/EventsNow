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
  :total_tickets, :price, :img_url, presence: true
  validate :valid_date
  before_validation :ensure_img_url

  def ensure_img_url
    if self.img_url.empty?
    self.img_url = "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7988cfd6c74ccf6e16094939d87dc274&auto=format&fit=crop&w=2706&q=80"

    end

    # Photo by Redd Angelo on Unsplash
  end

  # def valid_times
  #   if self.time_start != nil && self.time_start != nil
  #     unless self.time_start < self.time_end
  #       errors[:event] << "ending time must be greater than starting time"
  #     end
  #   end
  # end

  def valid_date
    if self.date != nil
      unless self.date >= Date.today
        errors[:event] << "date is invalid. Please choose today's date or a future one"
      end
    end
  end

  def remaining_tickets
    remaining_tickets = 0
    Ticket.where(event_id: self.id).each do |ticketobj|
      remaining_tickets += ticketobj.tickets_count
    end
    self.total_tickets - remaining_tickets
  end

  belongs_to :user,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :bookmarks,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Bookmark,
  dependent: :destroy

  has_many :tickets,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Ticket,
  dependent: :destroy


  belongs_to :category,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :Category



end
