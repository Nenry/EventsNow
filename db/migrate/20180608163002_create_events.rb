class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :host_id, null: false
      t.integer :category_id, null: false
      t.integer :tickets_left, null: false
      t.string :img_url, null: false
      t.integer :price, null: false

      t.timestamps
    end

    add_index :events, :title, unique: true
    add_index :events, :host_id
    add_index :events, :category_id
    add_index :events, :city
    add_index :events, :state
  end
end
