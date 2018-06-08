class User < ApplicationRecord 
    validates :email, :first_name, :last_name, :password_digest, presence: true
		validates :session_token, presence: true, uniqueness: true
		validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    before_validation :ensure_session_token, :ensure_img_url


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