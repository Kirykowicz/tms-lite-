class StopSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :address, :name 

  def city 
    object.site.city 
  end

  def state
    object.site.state 
  end

  def address 
    object.site.address
  end

  def name 
    object.site.name
  end
end
