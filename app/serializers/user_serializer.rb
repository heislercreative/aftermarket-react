class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :address, :city, :state_initials, :zip
  has_one :cart
end
