class CreateCategoriesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, null: false
      t.integer :event_id, null: false
      
      t.timestamps
    end
    add_index :categories, :event_id
  end
end
