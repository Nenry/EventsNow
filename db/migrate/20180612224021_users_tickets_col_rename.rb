class UsersTicketsColRename < ActiveRecord::Migration[5.2]
  def change

     rename_column :events, :tickets_left, :total_tickets

  end
end
