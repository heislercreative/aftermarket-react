class User < ApplicationRecord
  has_one :cart
  has_secure_password

  before_validation :downcase_email
  validates_presence_of :email, :password, :first_name, :last_name, :address, :city, :state_initials, :zip
  validates_uniqueness_of :email
  validates :state_initials, length: { maximum: 2 }
  validates :zip, length: { is: 5 }

  def downcase_email
    self.email.downcase!
  end

  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
