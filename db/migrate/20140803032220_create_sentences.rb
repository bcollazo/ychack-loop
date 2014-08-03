class CreateSentences < ActiveRecord::Migration
  def change
    create_table :sentences do |t|
    	t.integer :user_id
    	t.datetime :start
    	t.datetime :end
    	t.integer :duration #in seconds
    	t.string :location
    	t.string :categories, :limit => nil
        t.string :invitees

    	t.timestamps
    end
  end
end
