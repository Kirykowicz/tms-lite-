class CreateCarriers < ActiveRecord::Migration[7.0]
  def change
    create_table :carriers do |t|

      t.timestamps
    end
  end
end
