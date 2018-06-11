class RemoveAssociationIdsColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :host_event_ids
    remove_column :users, :attend_event_ids
    remove_column :users, :bookmark_event_ids
  end
end
