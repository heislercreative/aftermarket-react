class User < ApplicationRecord
  has_secure_password
  has_one :cart

  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
