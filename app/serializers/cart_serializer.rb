class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_many :products, serializer: ProductBasicsSerializer
end
