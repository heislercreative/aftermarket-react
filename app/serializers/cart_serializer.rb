class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_many :products
end
