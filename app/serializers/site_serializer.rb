class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :address, :state
end
