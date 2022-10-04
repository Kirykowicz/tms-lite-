class StopSerializer < ActiveModel::Serializer
  attributes :id, :city, :state

  def city 
    object.site.city 
  end

  def state
    object.site.state 
  end
end
