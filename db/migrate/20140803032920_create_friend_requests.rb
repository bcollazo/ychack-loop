class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
    	t.integer :requestee_id
    	t.integer :requestor_id

    	t.timestamps
    end
  end
end
