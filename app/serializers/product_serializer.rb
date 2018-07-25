class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_full, :img_thumbnail, :description, :price, :sold_out
end
