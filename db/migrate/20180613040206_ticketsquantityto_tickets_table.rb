class TicketsquantitytoTicketsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :tickets_count, :integer, null: false
  end
end
