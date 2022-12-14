class Load < ApplicationRecord
    belongs_to :customer 
    belongs_to :carrier 
    has_many :stops, dependent: :destroy
    has_many :sites, through: :stops 
end
