class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_full, :img_thumbnail, :description, :price, :free_shipping, :sold_out
end
