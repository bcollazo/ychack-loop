class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
    	t.integer :a_id
    	t.integer :b_id

    	t.timestamps
    end
  end
end
