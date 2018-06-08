class RemoveTimeColAddTimeStartEnd < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :time
    add_column :events, :time_start, :string, null: false 
    add_column :events, :time_end, :string, null: false 
  end
end
