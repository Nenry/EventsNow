class DroppingeventIDfromcategoriestable < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :event_id

  end
end
