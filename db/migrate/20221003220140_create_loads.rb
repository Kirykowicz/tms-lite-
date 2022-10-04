class CreateLoads < ActiveRecord::Migration[7.0]
  def change
    create_table :loads do |t|
      t.integer :customer_id
      t.integer :carrier_id 
      t.float :revenue
      t.float :cost 
      t.string :equipment_type 
      t.timestamps
    end
  end
end
