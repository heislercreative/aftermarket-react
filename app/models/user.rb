class User < ApplicationRecord
  has_one :cart
  has_secure_password

  before_validation {
    self.email.to_s.downcase
  }

  validates_presence_of :email, :password, :first_name, :last_name, :address, :city, :state, :zip
  validates_uniqueness_of :email
  validates :stateInitials, length: { maximum: 2 }
  validates :zip, length: { is: 5 }

  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
