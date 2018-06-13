class Createcategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category
    add_column :events, :category_id, :integer
  end
end
