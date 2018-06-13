class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :category, :string
    remove_column :events, :category_id
  end
end
