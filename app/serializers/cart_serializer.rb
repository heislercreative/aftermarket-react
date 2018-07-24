class CartSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user, serializer: CartUserSerializer
  has_many :products
end
