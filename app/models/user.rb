# == Schema Information
#
# Table name: users
#
#  id                 :bigint(8)        not null, primary key
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  first_name         :string           not null
#  last_name          :string           not null
#  host_event_ids     :integer          default([]), is an Array
#  attend_event_ids   :integer          default([]), is an Array
#  bookmark_event_ids :integer          default([]), is an Array
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  img_url            :string           not null
#

class User < ApplicationRecord 
    validates :email, :first_name, :last_name, :password_digest, presence: true
		validates :session_token, presence: true, uniqueness: true
		validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    before_validation :ensure_session_token, :ensure_img_url

    has_many :events,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

    has_many :bookmarks,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Bookmark

    has_many :tickets,
    primary_key: :id,
    foreign_key: :buyer_id,
    class_name: :Ticket

    def password=(password)
        @password = password
			self.password_digest = BCrypt::Password.create(password)

    end 

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64 
    end 

    def ensure_img_url
      self.img_url ||= "https://i.imgur.com/0mIFV1U.png"
      # credit: http://www.myrunningcostumes.com/costumes/russell
  
    end 

    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save!
      self.session_token
    end 

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)

      user && user.is_password?(password) ? user : nil
    end 

end 
