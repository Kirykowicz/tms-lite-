class Carrier < ApplicationRecord
    has_many :loads 
    has_many :customers, through: :loads 
end
