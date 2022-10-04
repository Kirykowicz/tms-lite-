class LoadSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :customer_name, :carrier_id, :carrier_name, :revenue, :cost, :total 
  has_many :stops

  def customer_name 
    object.customer.name
  end

  def carrier_name 
    object.carrier.name 
  end

  def total 
    object.revenue - object.cost 
  end
end