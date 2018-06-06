class UsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :host_event_ids, array: true, default: []
      t.integer :attend_event_ids, array: true, default: []
      t.integer :bookmark_event_ids, array: true, default: []

      t.timestamps
    end 
    add_index :users, :session_token, unique: true 
    add_index :users, :email, unique: true
  end
end
