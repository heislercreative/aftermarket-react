class User < ApplicationRecord
  has_one :cart
  has_secure_password

  before_validation :downcase_email
  validates_presence_of :email, :password, :first_name, :last_name, :address, :city, :state_initials, :zip
  validates_uniqueness_of :email
  validates :state_initials, length: { maximum: 2 }
  validates :zip, length: { is: 5 }

  before_create :create_token

  def downcase_email
    self.email.downcase!
  end

  def create_token
    self.token = SecureRandom.uuid + 'aft18' + self.email[0,4]
  end

  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
