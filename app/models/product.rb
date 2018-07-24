class Product < ApplicationRecord
  has_many :cart_products
  has_many :carts, through: :cart_products
end
